// ANGULAR
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthBaseService } from './services/auth-base.service';


@NgModule({
  imports: [
    CommonModule,

  ],
})
export class AuthBaseModule {
  static forRoot(): ModuleWithProviders<AuthBaseModule> {
    return {
      ngModule: AuthBaseModule,
      providers: [
        AuthBaseService

      ],
    };
  }
}
