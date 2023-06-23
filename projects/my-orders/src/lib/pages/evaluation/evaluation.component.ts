import { Component, OnInit } from '@angular/core';
import { MyOrdersService } from '../../services/my-orders.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IBook } from 'interfaces/IBook';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IEvaluation } from 'interfaces/public-api';

@Component({
  selector: 'lib-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent implements OnInit {
  myForm: FormGroup;
  orderId!: string;
  books!: IBook[] | undefined;
  booksForm: FormGroup = this.fb.group({});
  evaluationForm!: FormGroup;
  evaluation!: IEvaluation[];

  get booksControls() {
    return this.myForm.get('books') as FormArray;
  }

  constructor(
    private route: ActivatedRoute,
    private myOrdersService: MyOrdersService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      books: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.orderId = params['id'];
      }
    });
    this.myOrdersService
      .getMyOrderEvaluation(this.orderId)
      .pipe(take(1))
      .subscribe((response) => {
        this.books = response.result || [];
        this.addEvaluations(this.books);
      });
  }

  addEvaluations(books: IBook[]) {
    const booksArray = this.myForm.get('books') as FormArray;
    const booksData = books;

    for (const book of booksData) {
      const evaluationArray = this.fb.array([]) as FormArray;

      for (const evaluation of book.evaluation) {
        const questionGroup = this.fb.group({
          question: [evaluation.question],
          options: [evaluation.options],
          selectedOption: [
            null,
            [Validators.required, 
              equalToValidator(evaluation.correctOption)
            ],
          ],
        });

        evaluationArray.push(questionGroup);
      }

      const bookGroup = this.fb.group({
        name: book.name,
        evaluation: evaluationArray,
      });

      booksArray.push(bookGroup);
    }
  }

  evaluationControls(index: number) {
    return (this.booksControls.controls[index] as FormGroup).get(
      'evaluation'
    ) as FormArray;
  }
}
export function equalToValidator(expectedValue: any): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value !== expectedValue) {
      return { equalTo: { value: expectedValue } };
    }
    return null;
  };
}
// orderId!: string;
// books!: IBook[] | undefined;
// booksForm: FormGroup = this.fb.group({});
// evaluationForm!: FormGroup;
// evaluation!: IEvaluation[];

// constructor(
//   private route: ActivatedRoute,
//   private myOrdersService: MyOrdersService,
//   private fb: FormBuilder
// ) {}

// ngOnInit(): void {
//   this.route.params.subscribe((params) => {
//     if (params['id']) {
//       this.orderId = params['id'];
//     }
//   });
//   this.myOrdersService
//     .getMyOrderEvaluation(this.orderId)
//     .pipe(take(1))
//     .subscribe((response) => {
//       this.books = response.result || [];
//       // this.addEvaluationControls(this.books);
//       console.log(this.books)
//     });
// }}

//   addEvaluationControls(books: IBook[]) {
//     // Itera sobre las preguntas y agrega un control para cada una

//     books.map((book) => {
//       const evaluation = book.evaluation.map((evaluation) => {
//         const options = evaluation.options.map((option) => {
//           return this.fb.control(option, Validators.required);
//         });
//         return this.fb.group({
//           correctOption: [null, Validators.required],
//           options: this.fb.array(options),
//         });
//       });
//       this.booksForm.addControl(`${book._id}`, this.fb.array(evaluation));
//       console.log(this.booksForm)
//     });
//   }
// }
