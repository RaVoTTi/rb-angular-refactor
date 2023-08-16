// ANGULAR
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookViewComponent } from './pages/book-view/book-view.component';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { NgModule } from '@angular/core';

import { CartComponent } from './pages/cart/cart.component';
import { ComponentsModule } from 'projects/components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { CartLocalService } from './services/cart-local.service';
// import { CartService } from './services/wishlist.service';

// ME
// import { CartComponent } from './pages/wishlist/wishlist.component';
// import { BooksListComponent } from './pages/books-list/books-list.component';
// import { BookViewComponent } from './pages/book-view/book-view.component';
// import { CartIconComponent } from './components/wishlist-icon/wishlist-icon.component';
// import { SearchHeaderComponent } from './components/search-header/search-header.component';
// import { ComponentsModule } from 'projects/components/src/public-api';
// import { BookDetailComponent } from './components/book-detail/book-detail.component';

// import { BookStateModule } from 'projects/books-state/src/lib/book-state.module';

// import { UtilsModule } from 'interfaces/public-api';
// import { TermsComponent } from '../../../terms/src/lib/terms/terms.component';

const routes: Routes = [

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
    path: 'cart',
    component: CartComponent,
  },

];

@NgModule({
  declarations: [

    SearchHeaderComponent,

    BooksListComponent,
    BookViewComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule

  ],
})
export class BooksModule {
  constructor(cartService: CartLocalService) {
    cartService.initCartLocalStorage();
  }
}
