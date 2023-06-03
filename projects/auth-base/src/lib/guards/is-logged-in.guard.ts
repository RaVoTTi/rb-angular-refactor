import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { AuthBaseService } from '../services/auth-base.service';
import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';


export const isLoggedInGuard: CanActivateFn = () => {

  const localStorageService: LocalStorageService = inject(LocalStorageService)
  const router: Router = inject(Router)
  

  
  if (!localStorageService.getToken() ){
    router.createUrlTree(['/app/home'])
  }

  return !!localStorageService.getToken() 

};

