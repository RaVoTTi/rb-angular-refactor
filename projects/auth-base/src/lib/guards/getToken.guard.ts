import { CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const getTokenGuard: CanActivateFn = () => {
  const localStorageService: LocalStorageService = inject(LocalStorageService)
  localStorageService.getToken()
  return true;
};
