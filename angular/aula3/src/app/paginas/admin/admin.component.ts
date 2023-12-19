import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private rota: Router){}

  sair(): void{
    //Exclui o email do localStorage
    localStorage.removeItem('email');

    //Redirecionamento
    this.rota.navigateByUrl('/login');
  }
}
