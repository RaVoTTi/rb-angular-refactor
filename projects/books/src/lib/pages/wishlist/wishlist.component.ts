import { Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/IBook';
import { BehaviorSubject } from 'rxjs';
import { WishlistHttpService } from '../../services/wishlist-http.service';

@Component({
  selector: 'rb-wishlist',
  templateUrl: './wishlist.component.html',
  styles: [],
})
export class WishlistComponent implements OnInit {
  wishlistItems$!: BehaviorSubject<IBook[] | undefined>;
  wishlistPrice$!: BehaviorSubject<number>;
  constructor(
    private wishlistHttpService: WishlistHttpService
  ) {}
  ngOnInit(): void {
    this.wishlistHttpService.initWishlistByIds().subscribe();
    this.wishlistItems$ = this.wishlistHttpService.wishlistHttp$;
    this.wishlistPrice$ = this.wishlistHttpService.wishlistPrice$;
  }


}
