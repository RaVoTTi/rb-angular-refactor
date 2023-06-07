import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { ImgComponent } from './img/img.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ImgComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SubHeaderComponent,
  ],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [
    FooterComponent,
    ImgComponent,
    BreadcrumbsComponent,
    SubHeaderComponent,


  
  ],
})
export class ComponentsModule {}
