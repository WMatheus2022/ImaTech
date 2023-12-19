import { Component } from '@angular/core';
import { Aluno } from '../modelo/Aluno';
import { FormularioComponent } from '../formulario/formulario.component';
import { TabelaComponent } from '../tabela/tabela.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormularioComponent, TabelaComponent, AppComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  //vetor de alunos
  vetor : Aluno[] = [
    {'nome': 'Alice', nota1:8, nota2:5},
    {'nome': 'Wander', nota1:6, nota2:9},
    {'nome': 'Bob', nota1:10, nota2:4}
  ];

   // Função de cadastro
  cadastrarAluno(obj:Aluno):void{
    this.vetor.push(obj);
  }

}
