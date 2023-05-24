import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStateComponent } from './books-state.component';

describe('BooksStateComponent', () => {
  let component: BooksStateComponent;
  let fixture: ComponentFixture<BooksStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
