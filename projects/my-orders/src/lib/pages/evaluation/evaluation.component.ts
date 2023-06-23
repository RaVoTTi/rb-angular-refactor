import { Component, OnInit } from '@angular/core';
import { MyOrdersService } from '../../services/my-orders.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  get booksControls() {
    return this.myForm.get('books') as FormArray;
  }

  constructor(
    private route: ActivatedRoute,
    private myOrdersService: MyOrdersService,
    private fb: FormBuilder,
    private router: Router
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
            [Validators.required, equalToValidator(evaluation.correctOption)],
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
  refund() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myOrdersService
      .patchMyOrderEvaluation(this.orderId)
      .pipe(take(1))
      .subscribe((respose) => {
        if(respose.ok){
          this.router.navigateByUrl('/app/myorders')
        }
        
      });
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
