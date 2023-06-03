import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { AuthBaseService } from '../services/auth-base.service';
import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

Injectable({
  providedIn: 'root',
})
class IsLoggedOutGuard {
  constructor(private localStorageService: LocalStorageService) {

  }
  canActivate(): boolean {
    return !this.localStorageService.getToken()
  }



}
export const isLoggedOutGuard: CanActivateFn = (route, state) => {
  return inject(IsLoggedOutGuard).canActivate()
};

