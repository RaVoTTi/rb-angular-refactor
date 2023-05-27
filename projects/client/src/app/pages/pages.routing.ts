import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '../shell/shell.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';





const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        // canActivate: [IsLoggedOut],

        // component: TestComponent,
      },

      // {
      //   path: 'books',
      //   loadChildren: () =>
      //     import('projects/books/src/public-api').then((m) => m.BooksModule)
      // },
      // {
      //   path: 'terms',
      //   loadChildren: () =>
      //   import('libs/terms/src').then((m) => m.TermsModule),
      // },

      // {
      //   path: 'mylearning',
      //   loadChildren: () =>
      //     import('libs/my-learning/src').then((m) => m.MyLearningModule),
      //   canActivate: [IsLoggedIn],
      // },
      // {
      //   path: 'myorders',
      //   loadChildren: () =>
      //     import('libs/my-orders/src').then((m) => m.MyOrdersModule),
      //   canActivate: [IsLoggedIn],
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () =>
      //     import('libs/settings/src').then((m) => m.SettingsModule),
      //   canActivate: [IsLoggedIn],
      // },
      // {
      //   path: 'checkout',
      //   loadChildren: () =>
      //     import('libs/checkout/src').then((m) => m.CheckoutModule),
      //   canActivate: [IsLoggedIn],
      // },

    ],
  },]
@NgModule({
  declarations: [],
  imports: [
    // RouterModule.forChild(routes),
    HomeModule,
    CommonModule
  ]
})
export class PagesRoutingModule { }
