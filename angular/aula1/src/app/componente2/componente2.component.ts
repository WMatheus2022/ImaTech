import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {
  // Exibir texto
  exibirTexto:boolean = true;

  // funcao para exibir ou ocultar texto
  funcaoExibirTexto():void {
    this.exibirTexto = !this.exibirTexto;
  }

  // Lista de nomes
  nomes:string[] = ['larissa', 'warley', 'negueba', 'almarir'];

  //
  Linguagem:string = 'C#';

  //funcao alterar linguagem
  alterarLinguagem():void {
    alert('Funcionou!');
  }
  
}
