import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { ImgComponent } from './img/img.component';
import { PreloaderComponent } from '../../../client/src/app/shared/preloader/preloader.component';

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
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [
    MainComponent,
    HeaderComponent,
    ImgComponent,
    BreadcrumbsComponent,
  
  ],
})
export class ComponentsModule {}
