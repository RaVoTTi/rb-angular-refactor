import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShellComponent } from './shell/shell.component';
// import { PagesRoutingModule } from './pages/pages.routing';

// const routes: Routes =  [ {
//   path: 'app',
//   component: ShellComponent,
//   children: [
//     {
//       path: 'home',
//       component: HomeComponent,
//       // canActivate: [IsLoggedOut],

//       // component: TestComponent,
//     },

//     // {
//     //   path: 'books',
//     //   loadChildren: () =>
//     //     import('projects/books/src/public-api').then((m) => m.BooksModule)
//     // },
//     // {
//     //   path: 'terms',
//     //   loadChildren: () =>
//     //   import('libs/terms/src').then((m) => m.TermsModule),
//     // },

//     // {
//     //   path: 'mylearning',
//     //   loadChildren: () =>
//     //     import('libs/my-learning/src').then((m) => m.MyLearningModule),
//     //   canActivate: [IsLoggedIn],
//     // },
//     // {
//     //   path: 'myorders',
//     //   loadChildren: () =>
//     //     import('libs/my-orders/src').then((m) => m.MyOrdersModule),
//     //   canActivate: [IsLoggedIn],
//     // },
//     // {
//     //   path: 'settings',
//     //   loadChildren: () =>
//     //     import('libs/settings/src').then((m) => m.SettingsModule),
//     //   canActivate: [IsLoggedIn],
//     // },
//     // {
//     //   path: 'checkout',
//     //   loadChildren: () =>
//     //     import('libs/checkout/src').then((m) => m.CheckoutModule),
//     //   canActivate: [IsLoggedIn],
//     // },

//   ],
// },]

const routes: Routes = [{
  path: '**',
  component: ShellComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    // PagesRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
