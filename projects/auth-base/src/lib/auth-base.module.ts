// ANGULAR
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
        // AuthBaseService,


      ],
    };
  }
}
