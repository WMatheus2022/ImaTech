import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../modelo/Aluno';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  //Vetor de Alunos
  alunos:Aluno[] = [];

  //Formulário
  formulario = new FormGroup({
    nome: new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl('')
  });

  //Construtor
  constructor(private servico:AlunoService){}

  // Após renderizar o componente
  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.alunos = dados);
  }

  //metodo para cadastrar alunos
  cadastrar():void{
    this.servico.cadastrar(this.formulario.value as Aluno)
    .subscribe(aluno => {
      //Cadastrar Vetor alunos
      this.alunos.push(aluno)

      //Limpar o formulario
      this.formulario.reset();
    });
  }

  //Metodo para remover
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(r => {
      //encontrar a posição do aluno no vetor
      let posicaoAluno = this.alunos.findIndex(obj => {return obj.id === id});

      this.alunos.splice(posicaoAluno, 1);
    });
  }
}
