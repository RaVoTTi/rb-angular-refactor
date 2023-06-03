import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './header/header.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { ComponentsModule } from 'projects/components/src/public-api';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    AuthHeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,


  ]
})
export class SharedModule { }
