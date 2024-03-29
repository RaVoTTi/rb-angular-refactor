import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'interfaces/public-api';
import { ValidatorsService } from '../../validators/validators.service';
import {
  AuthBaseService,
  LocalStorageService,
} from 'projects/auth-base/src/public-api';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IError } from 'interfaces/IError';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authBaseService: AuthBaseService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService,
    private router: Router,

    private vs: ValidatorsService // private messageService: MessageService
  ) {
    this._initForm();
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loginForm.disable()
    const { email, password } = this.loginForm.value as ILogin;

    this.authBaseService
      .postLogin({ email, password })
      .subscribe({
        next: (response) => {
          if (this.loginForm.get('remember')?.value) {
            localStorage.setItem('email', this.loginForm.get('email')?.value)
          } else {
            localStorage.removeItem('email')
          }

          if (response.token) {
            this.localStorageService.setToken(response.token);
            this.router.navigate(['/app/books']);
          }

        },
        error: (error: IError) => {

          const msg = error?.error?.msg

          if (msg === "Please confirm your email to login") {
            this.router.navigateByUrl('/auth/resend',
              { state: { email } })
          }
        }

      })
    setTimeout(() => {
      this.loginForm.enable()
      this.loginForm.patchValue({
        password: ''
      })


    })
  }
  showInfo() {
    this.toastr.info('Coming Soon', '503');
  }


  private _initForm() {
    this.loginForm = this.formBuilder.group({
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.vs.validatePat('password')]],
      remember: [true]
    });
  }
}
