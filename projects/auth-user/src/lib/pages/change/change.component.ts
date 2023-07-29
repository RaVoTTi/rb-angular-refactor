import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthBaseService } from 'projects/auth-base/src/public-api';
import { take } from 'rxjs';
import { ValidatorsService } from '../../validators/validators.service';

@Component({
  selector: 'lib-change',
  templateUrl: './change.component.html',
  styles: [
  ]
})
export class ChangeComponent implements OnInit {
  passToken!: string
  passwordForm!: FormGroup;

  constructor(private authBaseService: AuthBaseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private vs: ValidatorsService


  ) {

    this._initForm()
   }
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['token']) {
        this.passToken = params['token'];

      }
    });
  }
  _initForm() {
    this.passwordForm = this.fb.group(
      {
        password: [
          '',
          [Validators.required,
          this.vs.validatePat('password')
          ],
        ],
        password2: ['', [Validators.required]],
      },
      {
        validators: [this.vs.passwordMismatch('password', 'password2')],
      }
    );
  }
  changePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    this.passwordForm.disable()
    const { password } = this.passwordForm.value;

    this.authBaseService
      .patchForgotPasswordJWT(this.passToken, password)
      .subscribe((response) => {
        this.router.navigate(['/auth/login']);
      });

  }
}
