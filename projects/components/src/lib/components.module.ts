import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { HeaderComponent } from './header/header.component';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { MainComponent } from './pages/main/main.component';
import { ImgComponent } from './img/img.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MainComponent,
    AuthHeaderComponent,
    HeaderComponent,
    ImgComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  imports: [RouterModule, CommonModule, RouterModule],
  exports: [
    MainComponent,
    HeaderComponent,
    AuthHeaderComponent,
    FooterComponent,
    ImgComponent,
    BreadcrumbsComponent,

  
  ],
})
export class ComponentsModule {}
