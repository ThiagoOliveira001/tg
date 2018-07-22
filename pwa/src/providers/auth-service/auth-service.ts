import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  private usuario: any = null;

  constructor(public http: HttpClient,public storage: Storage) {
  }

  logar(loginData: any) {
    return this.http.post(`${ENVIRONMENT.urlApi}/api/login`,loginData).toPromise();
  }

  logout() {
    this.storage.remove(ENVIRONMENT.tokenNome);
  }

  authenticate() {
     
  }

  setToken(token: any) {
    this.storage.set(ENVIRONMENT.tokenNome,token);
  }

  setUser(usuario: any){
    this.usuario = usuario;
  }

  getUser() {
    return this.usuario;
  }
}
