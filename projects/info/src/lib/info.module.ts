import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from 'projects/components/src/public-api';

import { FAQComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { LocalStorageService } from 'projects/auth-base/src/public-api';


const routes: Routes = [

  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'faq',
    component: FAQComponent,
  }
];

@NgModule({
  declarations: [
    FAQComponent,
    TermsComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule
  ],
  exports: [
  ]
})
export class InfoModule {
  // constructor(private localStorageService: LocalStorageService){
  //   this.localStorageService.getToken()
  // }
 }
