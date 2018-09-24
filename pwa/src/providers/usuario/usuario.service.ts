import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class UsuarioProvider {

  constructor(
    public http: HttpClient,
    private _authService: AuthServiceProvider
  ) { }

  buscar(id: Number) {
    return this.http.get(`${ENVIRONMENT.urlApi}/api/usuario/${id}`);
  }

  cadastrar(usuario: any) {
    return this.http.post(`${ENVIRONMENT.urlApi}/api/usuario`, usuario).toPromise();
  }

  alterar(usuario: any) {
    return this.http.put(`${ENVIRONMENT.urlApi}/api/usuario/${usuario.id}`, usuario).toPromise();
  }
}