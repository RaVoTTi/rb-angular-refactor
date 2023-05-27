import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { ImgComponent } from './img/img.component';
import { CardComponent } from './card/card.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ImgComponent,
    BreadcrumbsComponent,
    CardComponent,
    AuthHeaderComponent,
    FooterComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, RouterModule],
  exports: [
    MainComponent,
    HeaderComponent,
    AuthHeaderComponent,
    FooterComponent,
    ImgComponent,
    BreadcrumbsComponent,
    CardComponent,

  
  ],
})
export class ComponentsModule {}
