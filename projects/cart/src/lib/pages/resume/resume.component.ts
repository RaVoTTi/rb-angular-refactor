import { Component, Inject } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { DOCUMENT } from '@angular/common';
// import { CartHttpService } from '../../services/cart-http.service';
// import { CartLocalService } from '../../services/cart-local.service';
import { BehaviorSubject } from 'rxjs';
import { IBook } from 'interfaces/IBook';

@Component({
  selector: 'lib-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  cartItems$!: BehaviorSubject<IBook[] | undefined>;
  cartPrice$!: BehaviorSubject<number>;

  constructor(
    @Inject(DOCUMENT) private document: Document,

    private checkoutService: CheckoutService,
    // private cartHttpService: CartHttpService,
    // private cartlocalService: CartLocalService,

  ){}


  goToPayment() {
    // this.loading = true;
    this.checkoutService
      .buyCart(['63e77d386f370db6ec16b13b'])
      .subscribe(({ result }) => {

        if (result?.url) {
          console.log(result?.url)
          this.document.location.href = result.url;
        } 
        //   this.loading = false;

        //   this.toastr.error('Something Happend', '500');
        // }
      });
  }
  //   isFavorite(id: string): boolean {
  //   return this.cartlocalService.isFavorite(id)
  // }
  // addBookToCart(id: string) {
  //   // console.log('valentin')
  //   //  isFavorite(id)
  //   let isFavorite = this.isFavorite(id)
    
  //   if (isFavorite === false) {
  //     isFavorite = true;
  //     this.cartlocalService.setBookCart(id);
  //   } else {
  //     isFavorite = false;
  //     this.cartlocalService.deleteBookCart(id);
  //     this.cartHttpService.deleteItemCart(id);
  //   }
  // }
}
