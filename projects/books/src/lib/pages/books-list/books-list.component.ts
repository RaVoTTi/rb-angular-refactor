import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/public-api';
import { BehaviorSubject, take } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { WishlistLocalService, } from '../../services/wishlist-local.service';
import { WishlistHttpService } from '../../services/wishlist-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'rb-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']

})
export class BooksListComponent implements OnInit{
  books!: IBook[] | undefined;
  allBooks! : IBook[] | undefined 
  searchForm!: FormGroup;



  constructor(
    private booksService: BooksService,
    private wishlistLocalService: WishlistLocalService,
    private wishlistHttpService: WishlistHttpService,
    private fb: FormBuilder,
    private toastr: ToastrService


  ) { 
    this.searchForm = this.fb.group({
      searchTerm: [''] // Initial value for the search term
    });
  }

  ngOnInit(): void {

    this.booksService
      .getBooks()
      .pipe(take(1))
      .subscribe((response) => {
        this.books = response.result;
        this.allBooks = response.result;

      });
  }



  isFavorite(id: string): boolean {
    return this.wishlistLocalService.isFavorite(id)
  }

  // }
  addBookToWishlist(id: string) {
    // console.log('valentin')
    //  isFavorite(id)
    let isFavorite = this.isFavorite(id)
    
    if (isFavorite === false) {
      this.toastr.success('Add to wishlist succesfully','201')

      isFavorite = true;
      this.wishlistLocalService.setBookWishlist(id);
    } else {
      this.toastr.success('Remove to wishlist succesfully','201')
      isFavorite = false;
      this.wishlistLocalService.deleteBookWishlist(id);
      this.wishlistHttpService.deleteItemWishlist(id);
    }
  }
  search(): void {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    if(searchTerm){
      this.books = this.books?.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    else{
      this.books = this.allBooks
    }

  }
}
