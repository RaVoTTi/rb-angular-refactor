import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { ComponentsModule } from 'projects/components/src/public-api';

@NgModule({
  declarations: [HomeComponent, Section1Component, Section2Component, ],
  imports: [CommonModule, ComponentsModule],
  exports: [HomeComponent]
})
export class HomeModule {}
