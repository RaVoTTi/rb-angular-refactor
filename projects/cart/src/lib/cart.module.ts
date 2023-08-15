import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { CartTableComponent } from './pages/cart-table/cart-table.component';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './pages/resume/resume.component';
import { CartLocalService } from './services/cart-local.service';


const routes: Routes = [

  {
    path: '',
    // component: CartTableComponent,
   component: ResumeComponent,


  }
]

@NgModule({
  declarations: [
    CartTableComponent,
    ResumeComponent,
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
  constructor(private cartlocalService: CartLocalService) {
    cartlocalService.initCartLocalStorage()
  }
}
