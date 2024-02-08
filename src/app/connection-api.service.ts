import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api';

  newProduct(product: Product): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-product`, product)
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-products-list`);
  }

  getSales(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-sales-list`);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete-product`, JSON.stringify(id));
  }

  //
  //

  buscarDados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/receber-dados`);
  }

  enviarObjeto(objeto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-objeto`, objeto);
  }

  enviarObjetoFirebase(): Observable<any> {
    // return this.http.get(`${this.apiUrl}/savedata`);
    return this.http.get(`${this.apiUrl}/buscar-dados-firestore`);
  }
}
