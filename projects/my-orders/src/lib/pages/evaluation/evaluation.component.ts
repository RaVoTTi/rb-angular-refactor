import { Component, OnInit } from '@angular/core';
import { MyOrdersService } from '../../services/my-orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { IBook } from 'interfaces/IBook';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IEvaluation } from 'interfaces/public-api';
import { ValidatorsService } from 'projects/auth-user/src/lib/validators/validators.service';

@Component({
  selector: 'lib-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent implements OnInit {
  myForm: FormGroup;
  orderId!: string;
  books!: IBook[] | undefined;
  submited = false

  get booksControls() {
    return this.myForm.get('books') as FormArray;
  }

  constructor(
    private route: ActivatedRoute,
    private myOrdersService: MyOrdersService,
    private fb: FormBuilder,
    private router: Router,
    private vs: ValidatorsService
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
        console.log(this.books)
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
            [
              Validators.required,
              this.vs.equalToValidator(evaluation.correctOption),
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
  selectedOptionControl(i: number, j: number) {
    return this.evaluationControls(i).controls[j].get([
      'selectedOption',
    ]) as FormControl;
  }
  submit() {
    this.submited = true

    if (this.myForm.invalid) {
      return;
    }
    this.myOrdersService
      .patchMyOrderEvaluation(this.orderId)
      .pipe(take(1))
      .subscribe((respose) => {
        if (respose.ok) {
          this.router.navigateByUrl('/app/myorders');
        }
      });
  }

  reloadForm() {
    window.location.reload()
  }



}
