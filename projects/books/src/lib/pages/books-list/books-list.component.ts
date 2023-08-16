import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/public-api';
import { BehaviorSubject, take } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { CartLocalService, } from '../../services/cart-local.service';
import { CartHttpService } from '../../services/cart-http.service';
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
    private cartLocalService: CartLocalService,
    private cartHttpService: CartHttpService,
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
    return this.cartLocalService.isFavorite(id)
  }

  // }
  addBookToCart(id: string) {
    // console.log('valentin')
    //  isFavorite(id)
    let isFavorite = this.isFavorite(id)
    
    if (isFavorite === false) {
      this.toastr.success('Add to cart succesfully','201')

      isFavorite = true;
      this.cartLocalService.setBookCart(id);
    } else {
      this.toastr.success('Remove to cart succesfully','201')
      isFavorite = false;
      this.cartLocalService.deleteBookCart(id);
      this.cartHttpService.deleteItemCart(id);
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
