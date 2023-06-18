import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Location } from '@angular/common';
import { IBook } from 'interfaces/public-api';
import { ActivatedRoute, Router } from '@angular/router';
import { MyLearningService } from '../../services/my-learning.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'frontend-my-learning-view',
  templateUrl: './my-learning-view.component.html',
})
export class MyLearningViewComponent implements OnInit {
  book!: IBook;
  id!: string;
  htmlContent! : SafeHtml;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private myLearningService: MyLearningService
  ) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
    this.reload()
  }
  reload() {
    this.myLearningService
      .getMyLearningById(this.id)
      .pipe(take(1))
      .subscribe((response) => {
        if (response.result) {

          this.book = response.result
          this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.book.content)
        } else {
          this.router.navigate(['/app/mylearning']);

        }

      });

    // this.allMyLearnings$ = this.store.pipe(select(selectAllMyLearnings));
  }
  // ngOnInit(): void {}

  evaluation() {
    this.router.navigate([`/app/mylearning/${this.book._id}/myevaluation`])
  }


}
