import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { ImgComponent } from './img/img.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';
import { CardBookComponent } from './card-book/card-book.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ToastrComponent } from './toastr/toastr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NothingComponent } from './nothing/nothing.component';

@NgModule({
  declarations: [
    ImgComponent,
    BreadcrumbsComponent,
    CardBookComponent,
    FooterComponent,
    SubHeaderComponent,
    PreloaderComponent,
    ToastrComponent,
    NothingComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,


  ],
  exports: [
    FooterComponent,
    CardBookComponent,
    NothingComponent,

    ImgComponent,
    BreadcrumbsComponent,
    SubHeaderComponent,
    PreloaderComponent,
  ],
})
export class ComponentsModule {}
