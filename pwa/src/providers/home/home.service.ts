import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class HomeProvider {

  constructor(
    public http: HttpClient
  ) { }

  buscar(id: Number) {
    return this.http.get(`${ENVIRONMENT.urlApi}/api/usuario/${id}`);
  }
}