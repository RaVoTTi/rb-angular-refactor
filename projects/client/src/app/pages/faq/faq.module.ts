import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQComponent } from './faq.component';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: FAQComponent,
  },
];

@NgModule({
  declarations: [
    FAQComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FAQModule { }
