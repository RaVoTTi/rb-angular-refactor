import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectSearchItems } from 'libs/book-state/src';
import { IItem } from 'libs/utils/src';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  tap,
} from 'rxjs';

@Component({
  selector: 'frontend-search-header',
  templateUrl: './search-header.component.html',
})
export class SearchHeaderComponent implements OnInit {
  items$!: Observable<IItem[]>;
  src!: string;

  // @Output() public enter = new EventEmitter();
  query = new FormControl('');
  books$!: Observable<IItem[]>;
  isDropdownOpened = false;

  constructor(private router: Router, private store: Store) {
    this.query.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((word) => {
        return (this.search(word ?? ''));
      });
  }
  ngOnInit() {}
  // search( value : string){
  //   this.items$ = this.store.pipe(select(selectSearchItems(value)))
  //   // console.log(value)
  // }
  search(word: string){
    this.items$ = this.store.pipe(select(selectSearchItems(word)))
  }


  redirect(url: string) {
    this.router.navigateByUrl(url);
  }
}
