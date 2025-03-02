import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private dados = {
      nome: '',
      email: '',
      mensagem: '',
      cep: '',
      cidade: '',
      pais: ''
    };
  

  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  getDados() {
  return this.dados;
  }

  setDados(dados: Partial<{ nome: string; email: string; mensagem: string; cep: string; cidade: string; pais: string }>) {
  this.dados = { ...this.dados, ...dados };
  }

  enviarDados(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });  
  return this.http.post(this.apiUrl, this.dados, {headers : headers});
  }
}

//ng generate service