import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';

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

  esqueceuSenha(email: string) {
    return this.http.post(`${ENVIRONMENT.urlApi}/api/usuario/esqueceu-senha`, { email }).toPromise();
  }
}