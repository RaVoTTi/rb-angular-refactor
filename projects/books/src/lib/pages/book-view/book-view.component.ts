
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BooksService } from '../../services/books.service';
import { WishlistService } from '../../services/wishlist.service';
import { environment } from 'environments/environment';
import { IBook } from 'interfaces/public-api';


@Component({
  selector: 'rb-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],

})
export class BookViewComponent implements OnInit {
  RAW_URL = environment.RAW_URL
  book!: IBook;
  bookId!: string;

  constructor(
    private booksService: BooksService,
    private wishlistService:WishlistService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,

  ) {
    console.log('Entro')
  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.bookId = params['id'];
        this.booksService
          .getBookBaseById(this.bookId)
          .pipe(take(1))
          .subscribe(({ result  }) => {
            if (result) {
              this.book = result;
            }
          });
      }
    });
  }

  back(){
    this.location.back()
  }
  addBookToWishlist(){
  
      this.wishlistService.setBookWishlist(this.bookId)
  }
  // toCheckOut(){
  //   if(this.isAuth$){

  //     this.router.navigate([`app/order/placeorder/${this.bookId}`]);
  //   }else{
  //     this.router.navigate([`auth/login`]);

  //   }


  // }
}
