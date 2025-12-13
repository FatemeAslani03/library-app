import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('auth-token')){
      return true;
  }
  if(localStorage.getItem('auth-token')){
    sessionStorage.setItem('auth-token',localStorage.getItem('auth-token')??'');

  }
  const router=inject(Router);
  router.navigateByUrl('/login')
  return false;
};
