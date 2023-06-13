import { Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/IBook';
import { take } from 'rxjs';
import { FeaturedService } from '../../services/featured.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.scss']
})
export class Section1Component implements OnInit {
  books!: IBook[] | undefined;
  booksInverse!: IBook[] | undefined;

  constructor(
    private featuredService: FeaturedService
  ) {}

  ngOnInit(): void {
    this.featuredService.getFeatured().pipe(take(1)).subscribe((response) => {
      this.books = response.result
      this.booksInverse = this.books?.slice().reverse()
    })
  }
}
