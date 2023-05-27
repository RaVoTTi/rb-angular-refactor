import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.reducer';

import * as fromBooks from './books.reducer';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { IItem } from 'interfaces/public-api';

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAll
);
export const selectBooksEntities = createSelector(
  selectBooksState,
  fromBooks.selectEntities
);
export const selectBooksById = (id: string) =>
  createSelector(selectBooksEntities, (books) => books[id]);
export const selectAllBooksAsItems = createSelector(
  selectAllBooks,
  (books) =>
    books.map((book) => {
      return {
        label: book.name,
        icon: '📕',
        url: '/app/books/id/' + book._id,
      };
    }) as IItem[]
);
export const selectSearchItems = (word: string) =>
  createSelector(selectAllBooksAsItems, (books) => {
    const wordUpper = word.toLowerCase();
    const search = books
      .filter(({ label }) => {
        return label.includes(wordUpper);
      })
      .slice(0, 4);
    if (search.length > 0) {
      return search;
    }
    return [
      {
        label: 'Book not found',
        icon: '❌',
        callback: () => {
          console.log('Book not found');
        },
      },
    ];
  });

export const selectSearchBooks = (word: string) =>
  createSelector(selectAllBooks, (books) =>
    books.filter(({ name }) => name.search(new RegExp(word)) > 0)
  );

export const selectLiteratureBooks = createSelector(selectAllBooks, (books) =>
  books.filter((book) => book.subject.name === 'LITERATURE')
);
export const selectWishBooks = (wish: string[]) =>
  createSelector(selectAllBooks, (books) =>
    books.filter((book) => wish.includes(book._id))
  );
export const areBooksLoaded = createSelector(
  selectBooksState,
  (state) => state.allBooksLoaded
);
