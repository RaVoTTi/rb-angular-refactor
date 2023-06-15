import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { ILearning } from 'interfaces/ILearning';
import { MyLearningService } from '../../services/my-learning.service';
import { IBook } from 'interfaces/IBook';
import { BooksService } from '../../../../../books/src/lib/services/books.service';

@Component({
  selector: 'frontend-my-learning-list',
  templateUrl: './my-learning-list.component.html',
  styleUrls: ['./my-learning-list.component.scss'],

})
export class MyLearningListComponent implements OnInit {
  // allMyLearnings$!: Observable<ILearning[]>;
  // countMyLearnings$!: Observable<number>;
  allMyLearnings!: ILearning[] | undefined;



  constructor(
    private myLearningService: MyLearningService,

    ) { 
    this.myLearningService
      .getMyLearnings()
      .pipe(take(1))
      .subscribe((response) => {
        this.allMyLearnings = response.result;
      
      });
   
      // this.allMyLearnings$ = this.store.pipe(select(selectAllMyLearnings));
      // this.countMyLearnings$ = this.store.pipe(select(selectCountMyLearnings));
    }

  ngOnInit(): void {
  }
}
    // book(id: string): IBook | undefined {
      //   let data: IBook | undefined;
  //   this.store
  //     .pipe(select(selectBooksById(id)), take(1))
  //     .subscribe((book) => (data = book));
  
  //   return data;
  // }
// this.route.queryParams.subscribe((params) => {
//   const state = params['state'];

//   if (state) {
//     if (state === 'success') {
//       this.alertService.fire(
//         {
//           title: 'Your purchased was succesful!!',
//           text: 'Enjoy your summarise..',
//           icon: 'success',
//         },
//         {
//           urlConfi: '/app/mylearning', // 🔴 TODOOO
//           urlCancel: '/app/mylearning',
//         }
//       );
//     } else if (state === 'fail') {
//       this.alertService.fire(
//         {
//           title: 'The payment was unsuccesful!! ',
//           text: 'Check your card or try again',
//           icon: 'error',
//         },
//         {
//           urlConfi: '/app/mylearning', // 🔴 TODOOO
//           urlCancel: '/app/mylearning',
//         }
//       );
//     }
//   }
// });