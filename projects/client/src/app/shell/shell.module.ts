import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ComponentsModule } from 'projects/components/src/public-api';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ShellModule { }
