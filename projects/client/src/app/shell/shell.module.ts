import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ComponentsModule } from 'projects/components/src/public-api';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../pages/home/home.module';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    ShellComponent
  ]
})
export class ShellModule { }
