import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { ImgComponent } from './img/img.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ImgComponent,
    BreadcrumbsComponent,
    AuthHeaderComponent,
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
