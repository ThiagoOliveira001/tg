import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class UsuarioProvider {

  constructor(
    public http: HttpClient
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

  alterarSenha(usuario: any) {
    return this.http.put(`${ENVIRONMENT.urlApi}/api/usuario/${usuario.id}/alterar-senha`, usuario).toPromise();
  }

  esqueceuSenha(idUsuario: string, email: string) {
    return this.http.post(`${ENVIRONMENT.urlApi}/api/usuario/${idUsuario}/esqueceu-senha`, { email }).toPromise();
  }
}