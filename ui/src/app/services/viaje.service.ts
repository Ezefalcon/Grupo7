import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Viaje } from '../model/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  URL = 'http://localhost:8080/viaje';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get(this.URL);
  }

  findById(id:number) {
    return this.httpClient.get(this.URL + "/" + id);
  }

  save(json: Viaje) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post(this.URL, json, httpOptions);
  }
}
