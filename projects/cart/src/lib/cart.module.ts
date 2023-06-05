import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartTableComponent } from './pages/cart-table/cart-table.component';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { QuantityComponent } from '../../../components/src/lib/quantity/quantity.component';


const routes: Routes = [
  {
    path: '',
    component: SubHeaderComponent,
    children: [
      {
        path: '',
        component: CartTableComponent,

      },]
  }
]

@NgModule({
  declarations: [
    CartItemComponent,
    CartTableComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
    CommonModule
  ],
  exports: [
  ]
})
export class CartModule {
  constructor(private cartService:CartService){
    cartService.initCartLocalStorage()
  }
 }
