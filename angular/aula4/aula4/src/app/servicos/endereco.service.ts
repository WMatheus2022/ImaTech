import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Endereco } from '../modelos/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http:HttpClient) { }

  retornarEndereco(cep:string):Observable<Endereco>{
    return this.http.get<Endereco>(`viacep.com.br/ws/${cep}/json/`)
  }
}
