import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

import { BooksEffects } from './state/books/books.effects';
import { booksReducer } from './state/books/books.reducer';
// import { BooksResolver } from './services/books.resolver';

@NgModule({
  declarations: [
  ],
  imports: [
    // StoreModule.forFeature('books', booksReducer),
    // EffectsModule.forFeature([BooksEffects]),


  ],
  exports: [
  ],
  providers: [
    // MessageService,
    // BooksResolver,
    // WishResolver
  ],
})
export class BookStateModule { }
