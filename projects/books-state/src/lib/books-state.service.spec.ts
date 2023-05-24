import { TestBed } from '@angular/core/testing';

import { BooksStateService } from './books-state.service';

describe('BooksStateService', () => {
  let service: BooksStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
