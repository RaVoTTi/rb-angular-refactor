import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthBaseService } from 'projects/auth-base/src/public-api';
import { take } from 'rxjs';

@Component({
  selector: 'lib-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
  ]
})
export class ConfirmationComponent implements OnInit {

  emailToken!: string
  constructor(private authBaseService: AuthBaseService,
    private route: ActivatedRoute,
    private router: Router,


  ) {

  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['token']) {
        this.emailToken = params['token'];
        this.authBaseService.getEmailConfirmationJWT(this.emailToken).subscribe((result) => {
          if (result.ok) {
            this.router.navigate(['/auth/login']);
          } else{
            this.router.navigate(['/auth/resend']);

          }
        })
      }
    });
  }

  confirmation() {

  }
}
