import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { HeaderComponent } from './header/header.component';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { ImgComponent } from './img/img.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';



@NgModule({
  declarations: [
    AuthHeaderComponent,
    HeaderComponent,
    ImgComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SubHeaderComponent,
  ],
  imports: [RouterModule, CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    AuthHeaderComponent,
    FooterComponent,
    ImgComponent,
    BreadcrumbsComponent,
    SubHeaderComponent,


  
  ],
})
export class ComponentsModule {}
