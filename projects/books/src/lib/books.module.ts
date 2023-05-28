// ANGULAR
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { BookViewComponent } from './pages/book-view/book-view.component';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { ComponentsModule } from 'projects/components/src/public-api';
import { CardBookComponent } from './components/card-book/card-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';


// import { WishlistService } from './services/wishlist.service';



// ME
// import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { BooksListComponent } from './pages/books-list/books-list.component';
// import { BookViewComponent } from './pages/book-view/book-view.component';
// import { WishlistIconComponent } from './components/wishlist-icon/wishlist-icon.component';
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

      // {
      //   path: 'wishlist',
      //   component: WishlistComponent,
      //   // resolve: {
      //   //   books: BooksResolver,
      //   // },
      // },

];

@NgModule({
  declarations: [
    BooksListComponent,
    BookViewComponent,
    CardBookComponent,
    BookDetailComponent,
    SearchHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // RouterModule,
    // UtilsModule,
    
  ],
  exports: [

  ],

})
export class BooksModule {
  // constructor(
  //   wishlistService: WishlistService
  //   ) {
  //   wishlistService.initWishlistLocalStorage();
  // }
}
