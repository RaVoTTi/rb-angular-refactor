import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersListComponent } from './pages/my-orders-list/my-orders-list.component';
import { MyOrderViewComponent } from './pages/my-order-view/my-order-view.component';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'projects/utils/src/public-api';
import { ClaimComponent } from './pages/claim/claim.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MyOrdersListComponent,

      },
      {
        path: 'id/:id',
        component: MyOrderViewComponent,

      },
      {
        path: 'evaluation/:id',
        component: EvaluationComponent,

      },
      {
        path: 'claim/:id',
        component: ClaimComponent,

      },
    ]
  }
];
@NgModule({
  declarations: [MyOrdersListComponent, MyOrderViewComponent, EvaluationComponent, ClaimComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule, ReactiveFormsModule, UtilsModule],
})
export class MyOrdersModule { }
