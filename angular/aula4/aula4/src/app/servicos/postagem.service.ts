import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Postagem } from '../modelos/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  //Contrutor
  constructor(private http:HttpClient) { }

  //URL
  private urlPostegm:string = 'https://jsonplaceholder.typicode.com/posts';

  //Métodos para rotorno das postagens
  listarPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.urlPostegm);
  }

  //Observable: Executa requisições em periodos de tempo
  //Subscriber: Recebe o retorno da requisições
}
