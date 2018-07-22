/*
Created: 18/04/2018
Modified: 05/06/2018
Model: PostgreSQL 9.5
Database: PostgreSQL 9.5
*/


-- Create tables section -------------------------------------------------

-- Table venda

CREATE TABLE venda(
 id Serial NOT NULL,
 nroNf  INTEGER NOT NULL,
 total Numeric NOT NULL,
 subTotal Numeric NOT NULL,
 desconto Numeric NOT NULL,
 data Timestamp NOT NULL,
 idContrato INTEGER
)
;

-- Create indexes for table venda

CREATE INDEX IX_Relationship3 ON venda (idContrato)
;

-- Add keys for table venda

ALTER TABLE venda ADD CONSTRAINT pk_venda PRIMARY KEY (id)
;

-- Table contrato

CREATE TABLE contrato(
  id Serial,  
  nroContrato INTEGER NOT NULL,
  corpoContrato  Character varying NOT NULL,
  idUsuario   INTEGER
)
;

-- Create indexes for table contrato

CREATE INDEX  IX_Relationship4  ON  contrato  ( idUsuario )
;

-- Add keys for table contrato

ALTER TABLE  contrato  ADD CONSTRAINT  pk_contrato  PRIMARY KEY ( id )
;

-- Table usuario

CREATE TABLE  usuario (
  id  Serial NOT NULL,
  rg  Character varying(20),
  cpf  Character varying(20),
  razaoSocial  Character varying(200),
  sobrenome  Character varying(150),
  cnpj  Character varying(25),
  senha  Character varying(350) NOT NULL,
  nome  Character varying(100),
  dtNascimento  Date NOT NULL,
  nomeFantasia  Character varying(200)
)
;

-- Add keys for table usuario

ALTER TABLE  usuario  ADD CONSTRAINT  pk_usuario  PRIMARY KEY ( id )
;

ALTER TABLE  usuario  ADD CONSTRAINT  senhaUnica  UNIQUE ( senha )
;

-- Table consumo

CREATE TABLE  consumo (
  id  Serial NOT NULL,
  quantidade  Numeric NOT NULL,
  data  Timestamp NOT NULL,
  idUsuario   INTEGER
)
;

-- Create indexes for table consumo

CREATE INDEX  IX_Relationship2  ON  consumo  ( idUsuario )
;

-- Add keys for table consumo

ALTER TABLE  consumo  ADD CONSTRAINT  pk_consumo  PRIMARY KEY ( id )
;

-- Table aparelho

CREATE TABLE  aparelho (
  id Serial NOT NULL,
  mac  Character varying(30) NOT NULL,
  valorCompra  Numeric NOT NULL,
  dtInicioSituacao  Timestamp NOT NULL,
  nroNf   INTEGER,
  situacao  Character varying(40),
  dataCompra  Date NOT NULL,
  modelo  Character varying(60) NOT NULL,
  idUsuario   INTEGER
)
;

-- Create indexes for table aparelho

CREATE INDEX  IX_Relationship5  ON  aparelho  ( idUsuario )
;

-- Add keys for table aparelho

ALTER TABLE  aparelho  ADD CONSTRAINT  pk_aparelho  PRIMARY KEY ( id )
;
-- Create foreign keys (relationships) section ------------------------------------------------- 

ALTER TABLE  consumo  ADD CONSTRAINT  consumoUsuario  FOREIGN KEY ( idUsuario ) REFERENCES  usuario  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE  venda  ADD CONSTRAINT  vendaContrato  FOREIGN KEY ( idContrato ) REFERENCES  contrato  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE  contrato  ADD CONSTRAINT  contratoUsuario  FOREIGN KEY ( idUsuario ) REFERENCES  usuario  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE  aparelho  ADD CONSTRAINT  aparelhoUsuario  FOREIGN KEY ( idUsuario ) REFERENCES  usuario  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
;




