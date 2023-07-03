// ANGULAR
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, LocalStorageService, UnauthorizedInterceptor } from '../public-api';

@NgModule({
  imports: [CommonModule],
})
export class AuthBaseModule {
  static forRoot(): ModuleWithProviders<AuthBaseModule> {
    return {
      ngModule: AuthBaseModule,
      providers: [
        LocalStorageService,

      ],
    };
  }
}
