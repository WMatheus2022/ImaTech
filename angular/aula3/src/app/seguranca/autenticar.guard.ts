import { CanActivateFn, Router } from '@angular/router';


export const autenticarGuard: CanActivateFn = (route, state) => {

  //Importar a class Rota
  const rota = new Router;

  //if localstoreger
  if(localStorage.getItem('email') == undefined){
    rota.navigateByUrl('/login');
  }

  return true;
};
