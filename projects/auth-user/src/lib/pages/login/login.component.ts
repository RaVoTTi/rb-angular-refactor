import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'interfaces/public-api';
import { ValidatorsService } from '../../validators/validators.service';
import { AuthBaseService, LocalStorageService } from 'projects/auth-base/src/public-api';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
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


    this.authBaseService
      .postLogin({ email, password }).subscribe((response) => {

        if (response.token) {

          this.localStorageService.setToken(response.token)
          this.router.navigate(['/app/books']);
          
        }
      })

  }
  showSuccess(){
    this.toastr.info('Hello world!', 'Toastr fun!');
    
  }

  private _initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, this.vs.validatePat('emailPat')]],
      password: ['', [Validators.required, this.vs.validatePat('passwordPat')]],
    });
  }
}
