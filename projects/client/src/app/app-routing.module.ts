import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShellComponent } from './shell/shell.component';
import { isLoggedInGuard } from 'projects/auth-base/src/public-api';
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

//   ],
// },]

const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [IsLoggedOut],
      },

      {
        path: 'terms',
        loadChildren: () =>
          import('./pages/terms/terms.module').then((m) => m.TermsModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./pages/faq/faq.module').then((m) => m.FAQModule),
      },
      {
        path: 'books',
        loadChildren: () =>
          import('projects/books/src/public-api').then((m) => m.BooksModule),
      },
      {
        path: 'mylearning',
        loadChildren: () =>
          import('projects/my-learning/src/public-api').then((m) => m.MyLearningModule),
        canActivate: [isLoggedInGuard]
      },

      //     {
      //       path: 'bookid/:id',
      //       component: BookViewComponent,
      //       // resolve: {
      //       //   books: BooksResolver,
      //       // },
      //     },

      //     // {
      //     //   path: 'wishlist',
      //     //   component: WishlistComponent,
      //     //   // resolve: {
      //     //   //   books: BooksResolver,
      //     //   // },
      //     // },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('projects/auth-user/src/public-api').then((m) => m.AuthUserModule),
  },
  { path: '**', redirectTo: '/app/home' },
  // { path: '', redirectTo: '/app' , pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
