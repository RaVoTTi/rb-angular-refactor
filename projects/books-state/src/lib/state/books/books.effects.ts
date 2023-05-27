import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { BookBaseService } from '../../services/book-base.service';
import {
  allBooksLoaded,
  loadAllBooks,
} from './books.actions';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllBooks),
      concatMap((action) => this.bookBaseService.getBooks()),
      map(({result}) => {
        const books = result ?? [];
        return allBooksLoaded({ books });
      })
    )
  );
  constructor(
    private actions$: Actions,
    private bookBaseService: BookBaseService
  ) {}
}
