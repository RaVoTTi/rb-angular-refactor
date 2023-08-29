import { NgModule } from '@angular/core';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ComponentsModule } from 'projects/components/src/public-api';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
];

@NgModule({
  declarations: [CheckoutComponent],
  imports: [ComponentsModule, CommonModule, RouterModule.forChild(routes)],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
