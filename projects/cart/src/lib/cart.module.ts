import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { CartTableComponent } from './pages/cart-table/cart-table.component';
import { CommonModule } from '@angular/common';
import { CartLocalService } from './services/cart-local.service';


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
  constructor(private cartLocalService:CartLocalService){
    cartLocalService.initCartLocalStorage()
  }
 }
