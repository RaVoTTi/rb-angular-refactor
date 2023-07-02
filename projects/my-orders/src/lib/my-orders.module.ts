import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersListComponent } from './pages/my-orders-list/my-orders-list.component';
import { MyOrderViewComponent } from './pages/my-order-view/my-order-view.component';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'projects/utils/src/public-api';
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
    ]
  }
];
@NgModule({
  declarations: [MyOrdersListComponent, MyOrderViewComponent, EvaluationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule, ReactiveFormsModule, UtilsModule],
})
export class MyOrdersModule { }
