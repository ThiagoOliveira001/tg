#include <ESP8266WiFi.h>//As libs precisam ser baixadas pelo gerenciador de bibliotecas
#include <PubSubClient.h>
#include <EmonLib.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

#define SSID_REDE "Casa Moreira"
#define SENHA_REDE "lucas0307"
#define INTERVALO_ENVIO_MQTT 10000

#define TOPICO_SUBSCRIBE "energia"
#define TOPICO_PUBLISH "energia"

#define ID_MQTT  "pc3"

WiFiUDP ntpUDP;

String horas;
int16_t utc = -3;
uint32_t currentMillis = 0;
uint32_t previousMillis = 0;

NTPClient timeClient(ntpUDP, "a.st1.ntp.br", utc*3600, 60000);

EnergyMonitor SCT013;

const char* BROKER_MQTT = "192.168.1.18";
int BROKER_PORT = 1883;
//const char* BROKER_USER = "fatec";
//const char* BROKER_PASSWORD = "teste";
int pinSCT = A0;
int tensao = 127;
const int id = 1;
float potencia;
long lastConnectionTime; 
long lastMQTTSendTime;
WiFiClient client;
WiFiClient clientMQTT;
PubSubClient MQTT(clientMQTT); // Instancia o Cliente MQTT passando o objeto clientMQTT
 
//prototypes
float FazLeituraEletricidade(void);
void initWiFi(void);
void initMQTT(void);
void reconectWiFi(void); 
void mqtt_callback(char* topic, byte* payload, unsigned int length);
void VerificaConexoesWiFIEMQTT(void); 
 
void initWiFi() 
{
    delay(10);
    Serial.println("------Conexao WI-FI------");
    Serial.print("Conectando-se na rede: ");
    Serial.println(SSID_REDE);
    Serial.println("Aguarde");
     
    reconectWiFi();
}

void initMQTT() 
{
    MQTT.setServer(BROKER_MQTT, BROKER_PORT);   //informa qual broker e porta deve ser conectado
    MQTT.setCallback(mqtt_callback);            //atribui função de callback (função chamada quando qualquer informação de um dos tópicos subescritos chega)
}
  
void mqtt_callback(char* topic, byte* payload, unsigned int length) 
{
        
}
  
void reconnectMQTT() 
{
    while (!MQTT.connected()) 
    {
        Serial.print("* Tentando se conectar ao Broker MQTT: ");
        Serial.println(BROKER_MQTT);
        if (MQTT.connect(ID_MQTT/*BROKER_USER,BROKER_PASSWORD*/)) 
        {
            Serial.println("Conectado com sucesso ao broker MQTT!");
            MQTT.subscribe(TOPICO_SUBSCRIBE); 
        } 
        else
        {
            Serial.println("Falha ao reconectar no broker.");
            Serial.println("Havera nova tentatica de conexao em 2s");
            delay(2000);
        }
    }
}
  
void reconectWiFi() 
{
    if (WiFi.status() == WL_CONNECTED)
        return;
         
    WiFi.begin(SSID_REDE, SENHA_REDE); // Conecta na rede WI-FI
    //WiFi.macAddress(mac); 
    while (WiFi.status() != WL_CONNECTED) 
    {
        delay(100);
        Serial.print(".");
    }
   
    Serial.println();
    Serial.print("Conectado com sucesso na rede ");
    Serial.print(SSID_REDE);
    Serial.println("IP obtido: ");
    Serial.println(WiFi.localIP());
}
 
void VerificaConexoesWiFIEMQTT(void)
{
    if (!MQTT.connected()) 
        reconnectMQTT(); //se não há conexão com o Broker, a conexão é refeita
     
     reconectWiFi(); //se não há conexão com o WiFI, a conexão é refeita
}
 

float FazLeituraEletricidade(void)
{
  float Irms = SCT013.calcIrms(1480);
  potencia = Irms * tensao;
  return potencia;
}

void setup()
{  
    SCT013.current(pinSCT, 6.0606);
    Serial.begin(9600);
    lastConnectionTime = 0; 
    lastMQTTSendTime = 0;
    initWiFi();
    initMQTT();
    Serial.println("Consumo energia ESP8266 NodeMCU");
    timeClient.begin();
}
 
//loop principal
void loop()
{
    char  MsgEletricidadeMQTT[50];
    double Irms;
    float energiaAtual;
    float x = (float)rand()/(float)(100);
    horas = timeClient.getFormattedTime();
    timeClient.forceUpdate();
    VerificaConexoesWiFIEMQTT();
    energiaAtual = FazLeituraEletricidade();
    sprintf(MsgEletricidadeMQTT, "{\"id\": %d, \"energia\": %f, \"hora\": %s }", id, x,horas.c_str());
    MQTT.publish(TOPICO_PUBLISH,MsgEletricidadeMQTT);
    //verifica se é o momento de enviar informações via MQTT
    /*if ((millis() - lastMQTTSendTime) > INTERVALO_ENVIO_MQTT)
    {
        sprintf(MsgEletricidadeMQTT,"- Energia: %d.",energiaAtual);
        MQTT.publish(TOPICO_PUBLISH, MsgEletricidadeMQTT);
        lastMQTTSendTime = millis();
    }*/
    
    delay(1000);
}