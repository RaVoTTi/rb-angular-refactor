import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'interfaces/public-api';
import { ValidatorsService } from '../../validators/validators.service';
import { AuthBaseService, LocalStorageService } from 'projects/auth-base/src/public-api';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authBaseService: AuthBaseService,
    private localStorageService: LocalStorageService,

    private router: Router,

    private vs: ValidatorsService // private messageService: MessageService
  ) {
    this._initForm()
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }


    const { email, password } = this.loginForm.value as ILogin;
    console.log(email, password)
    console.log(this.loginForm.invalid)

    this.authBaseService
      .postLogin({ email, password }).subscribe((response) => {

        console.log(response)
        if (response.token) {
          console.log(this.loginForm.value)

          this.localStorageService.setToken(response.token)
          this.router.navigate(['/app/books']);
        }
      })

  }

  //   .subscribe({
  //     error: ({ error }) => {
  //       this.loginForm.enable();
  //       // this.alert.fire({
  //       //   icon: 'error',
  //       //   text: error?.msg ? error?.msg : 'Something happened',
  //       // });
  //     },
  //   });
  private _initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, this.vs.validatePat('emailPat')]],
      password: ['', [Validators.required, this.vs.validatePat('passwordPat')]],
    });
  }
}
