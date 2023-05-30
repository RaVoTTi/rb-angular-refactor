import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../validators/validators.service';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vs: ValidatorsService // private messageService: MessageService
  ) {
    this._initForm();
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    console.log(this.signUpForm.value);
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
        password2: ['', [Validators.required]],
        terms: [false, [Validators.required, Validators.requiredTrue]],
      },
      {
        validators: [this.vs.passwordMismatch('password', 'password2')],
      }
    );
  }
}
