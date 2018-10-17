import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthServiceProvider {
  private usuario: any = null;

  constructor(public http: HttpClient, public storage: Storage) {
  }

  logar(loginData: any) {
    return this.http.post(`${ENVIRONMENT.urlApi}/api/login`, loginData).toPromise();
  }

  logout() {
    this.storage.remove(ENVIRONMENT.tokenNome);
  }

  setToken(token: any) {
    this.storage.set(ENVIRONMENT.tokenNome, token);
  }

  setUser(usuario: any) {
    this.usuario = usuario;
    this.storage.set('usuario', usuario);
  }

  getUser() {
    return this.usuario;
  }
}
