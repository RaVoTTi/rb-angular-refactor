import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../validators/validators.service';
import { AuthBaseService, IRegister } from 'projects/auth-base/src/public-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm!: FormGroup;
  referredBy!: string
  constructor(
    private formBuilder: FormBuilder,
    private authBaseService: AuthBaseService,
    private router: Router,
    private vs: ValidatorsService, // private messageService: MessageService
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.referredBy = params['referredBy'] ?? '';
    });
    this._initForm(this.referredBy);
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const { referredBy, ...rest } = this.signUpForm.value as IRegister
    const user = {
      ...rest,
      ...((referredBy?.length === 12) ? { referredBy } : {}),


    }

    this.authBaseService
      .postSignUp(user).subscribe((response) => {

        if (response.ok) {
          const email = this.signUpForm.get('email')?.value
          this.router.navigateByUrl('/auth/resend',
            { state: { email } }
          );
        } else {
          this.router.navigate(['/auth/login/']);

        }
      })



  }
  private _initForm(referredBy: string) {
    this.signUpForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, this.vs.validatePat('name')]],
        lastName: ['', [Validators.required, this.vs.validatePat('name')]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [this.vs.validateTypeof('number'), this.vs.validatePat('phone')]],
        password: [
          '',
          [Validators.required, this.vs.validatePat('password')],
        ],
        password2: ['', [Validators.required, this.vs.validatePat('password')]],
        terms: [false, [Validators.required, Validators.requiredTrue]],
        referredBy: [referredBy],

      },
      {
        validators: [this.vs.passwordMismatch('password', 'password2')],
      }
    );
  }



}
