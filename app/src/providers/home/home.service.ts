import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment/environment';

@Injectable()
export class HomeProvider {

  constructor(
    public http: HttpClient
  ) { }

  buscar(id: Number) {
    return this.http.get(`${ENVIRONMENT.urlApi}/api/usuario/${id}`);
  }
}