import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { ImgComponent } from './img/img.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';
import { CardBookComponent } from './card-book/card-book.component';



@NgModule({
  declarations: [
    ImgComponent,
    BreadcrumbsComponent,
    CardBookComponent,
    FooterComponent,
    SubHeaderComponent,
  ],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [
    FooterComponent,
    CardBookComponent,

    ImgComponent,
    BreadcrumbsComponent,
    SubHeaderComponent,


  
  ],
})
export class ComponentsModule {}
