import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Location } from '@angular/common';
import { ILearning } from 'interfaces/public-api';
import { ActivatedRoute, Router } from '@angular/router';
import { MyLearningService } from '../../services/my-learning.service';

@Component({
  selector: 'frontend-my-learning-view',
  templateUrl: './my-learning-view.component.html',
})
export class MyLearningViewComponent {
  learning!: ILearning;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private myLearningService: MyLearningService
  ) {

  }
  reload() {

    this.route.params.subscribe((params) => {
      this.myLearningService
        .getMyLearningById(params['id'])
        .pipe(take(1))
        .subscribe((response) => {
          if (response.result) {

            this.learning = response.result
          } else {
            this.router.navigate(['/app/mylearning']);

          }
        }
        )

    });

    // this.allMyLearnings$ = this.store.pipe(select(selectAllMyLearnings));
  }
  // ngOnInit(): void {}

  evaluation() {
    this.router.navigate([`/app/mylearning/${this.learning._id}/myevaluation`])
  }


}
