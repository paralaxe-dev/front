import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api';

  buscarDados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/receber-dados`);
  }

  enviarObjeto(objeto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-objeto`, objeto);
  }
}
