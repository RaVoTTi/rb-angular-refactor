import { NgModule } from '@angular/core';
import { MyLearningListComponent } from './pages/my-learning-list/my-learning-list.component';
import { MyLearningViewComponent } from './pages/my-learning-view/my-learning-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MyLearningListComponent,

      },
      {
        path: 'id/:id',
        component: MyLearningViewComponent,

      }
      ,]
  }
]

@NgModule({
  declarations: [
    MyLearningListComponent,
    MyLearningViewComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
    CommonModule
  ],
  exports: [
  ]
})
export class MyLearningModule { }
