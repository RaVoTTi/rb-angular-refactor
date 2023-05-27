// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// NGRX
// import {
//   EntityDataService,
//   EntityDefinitionService,
//   EntityMetadataMap,
// } from '@ngrx/data';

// ME
import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { MessageService } from 'primeng/api';

import { BooksListComponent } from './pages/books-list/books-list.component';
import { BookViewComponent } from './pages/book-view/book-view.component';
import { WishlistIconComponent } from './components/wishlist-icon/wishlist-icon.component';

import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UtilsModule } from 'libs/utils/src';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookStateModule } from 'projects/books-state/src/lib/book-state.module';
import { ComponentsModule } from 'projects/components/src/public-api';
// import { TermsComponent } from '../../../terms/src/lib/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHeaderComponent,
    children: [
      {
        path: '',
        component: BooksListComponent,

        // resolve: {
        //   books: BooksResolver,
        // },
      },
      {
        path: 'id/:id',
        component: BookViewComponent,
        // resolve: {
        //   books: BooksResolver,
        // },
      },

      {
        path: 'wishlist',
        component: WishlistComponent,
        // resolve: {
        //   books: BooksResolver,
        // },
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // UtilsModule,
    ReactiveFormsModule,
    BookStateModule,
    ComponentsModule
  ],
  declarations: [
    WishlistIconComponent,
    // CardBookComponent,
    WishlistComponent,
    SearchHeaderComponent,
    BooksListComponent,
    BookViewComponent,
    BookDetailComponent,
  ],
  exports: [
    SearchHeaderComponent,
    WishlistIconComponent,
    // CardBookComponent,
    BooksListComponent,
    BookViewComponent,
  ],

})
export class BookBaseModule {
  constructor(
    // wishlistService: WishlistService
    ) {
    // wishlistService.initWishlistLocalStorage();
  }
}
