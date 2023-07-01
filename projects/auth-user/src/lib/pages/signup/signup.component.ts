import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../validators/validators.service';
import { AuthBaseService, IRegister } from 'projects/auth-base/src/public-api';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'projects/utils/src/public-api';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authBaseService: AuthBaseService,
    private router: Router,
    private errorH: ErrorHandlerService,
    private vs: ValidatorsService // private messageService: MessageService
  ) {
    this._initForm();
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    const user = this.signUpForm.value as IRegister
    
    
    this.authBaseService
      .postSignUp(user).subscribe((response) => {

        if (response.token) {
          this.router.navigate(['/app/books']);
        }
      })


  }
  private _initForm() {
    this.signUpForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, this.vs.validatePat('namePat')]],
        lastName: ['', [Validators.required, this.vs.validatePat('namePat')]],
        email: ['', [Validators.required, this.vs.validatePat('emailPat')]],
        phone: ['', [Validators.required, this.vs.validatePat('phone')]],
        password: [
          '',
          [Validators.required, this.vs.validatePat('passwordPat')],
        ],
        password2: ['', [Validators.required, this.vs.validatePat('passwordPat')]],
        terms: [false, [Validators.required, Validators.requiredTrue]],
      },
      {
        validators: [this.vs.passwordMismatch('password', 'password2')],
      }
    );
  }
  errorMsg(key: string) {
    return this.errorH.errorMsg(this.signUpForm.controls[key]);
}
}
