import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';
import * as io from 'socket.io-client';
import { SocketIOClient } from 'socket.io-client';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable()
export class ConsumoProvider {
    private socket: SocketIOClient.Socket;

    constructor(
        public http: HttpClient,
        private storage: Storage
    ){
    } 

    startSocket() {
        return new Promise((resolve, reject) => {
            this.storage.get('usuario').then((user: any) => {
                this.socket = io(ENVIRONMENT.urlApi, { query: { id: user.id } });
                resolve();
            }).catch((error) => {
                reject();
            });
        });
    }
    
    getConsumo() {
        let observable = new Observable(observer => {
            this.socket.on('consumo-novo', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

    getConsumoOf(filtro: any) {
        return Observable
        .fromPromise(this.storage.get('usuario'))
        .flatMap((user: any) => {
            return this.http.get(`${ENVIRONMENT.urlApi}/api/consumo/${user.id}`, { params: { inicio: filtro.dataInicial, fim: filtro.dataFinal } });
        });   
    }
}