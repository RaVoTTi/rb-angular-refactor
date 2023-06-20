import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'projects/components/src/public-api';

import { HomeComponent } from './home.component';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section3Component } from './sections/section3/section3.component';


@NgModule({
  declarations: [HomeComponent, Section1Component, Section2Component, Section3Component, ],
  imports: [CommonModule, ComponentsModule, RouterModule],
  exports: [HomeComponent]
})

export class HomeModule {}
