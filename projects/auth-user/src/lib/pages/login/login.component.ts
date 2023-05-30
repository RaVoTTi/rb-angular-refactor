import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'interfaces/public-api';
import { ValidatorsService } from '../../validators/validators.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vs: ValidatorsService // private messageService: MessageService
  ) {
    this._initForm()
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value)
    // const { email, password } = this.loginForm.value as ILogin;
    // this.authBaseService
    //   .postLogin({ email, password })
    //   .pipe(
    //     tap(({ token }) => {
    //       if (token) {
    //         // this.store.dispatch(AuthActions.login({ token }));
    //         this.router.navigate(['/app']);
    //       }
    //     })
    //   )
    //   .subscribe({
    //     error: ({ error }) => {
    //       this.loginForm.enable();
    //       // this.alert.fire({
    //       //   icon: 'error',
    //       //   text: error?.msg ? error?.msg : 'Something happened',
    //       // });
    //     },
    //   });
  }
  private _initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, this.vs.validatePat('emailPat')]],
      password: ['', [Validators.required, this.vs.validatePat('passwordPat')]],
    });
  }
}
