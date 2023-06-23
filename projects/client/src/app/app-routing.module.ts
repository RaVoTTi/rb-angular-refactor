import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { getTokenGuard } from 'projects/auth-base/src/lib/guards/getToken.guard';

import {
  isLoggedInGuard,
  isLoggedOutGuard,
} from 'projects/auth-base/src/public-api';

import { HomeComponent } from './pages/home/home.component';
import { ShellComponent } from './shared/shell/shell.component';


const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [isLoggedOutGuard],
      },

      {
        path: 'info',
        canActivate: [getTokenGuard],

        loadChildren: () =>
          import('projects/info/src/public-api').then((m) => m.InfoModule),

      },
      {
        path: 'books',
        canActivate: [getTokenGuard],

        loadChildren: () =>
          import('projects/books/src/public-api').then((m) => m.BooksModule),
      },
      {
        path: 'mylearning',
        canActivate: [isLoggedInGuard],
        loadChildren: () =>
          import('projects/my-learning/src/public-api').then(
            (m) => m.MyLearningModule
          ),
      },
      {
        path: 'myorders',
        canActivate: [isLoggedInGuard],
        loadChildren: () =>
          import('projects/my-orders/src/public-api').then(
            (m) => m.MyOrdersModule
          ),
      },

      {
        path: 'cart',
        canActivate: [getTokenGuard],

        loadChildren: () =>
          import('projects/cart/src/public-api').then((m) => m.CartModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('projects/settings/src/public-api').then((m) => m.SettingsModule),
      },

    ],
  },
  {
    path: 'auth',
    canActivate: [isLoggedOutGuard],

    loadChildren: () =>
      import('projects/auth-user/src/public-api').then((m) => m.AuthUserModule),
  },
  { path: '**', redirectTo: '/app/books' },
  // { path: '', redirectTo: '/app/home'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',

      preloadingStrategy: PreloadAllModules,

    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
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
