import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidatorsService } from '../../validators/validators.service';
import { AuthBaseService } from 'projects/auth-base/src/public-api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lib-forgot',
  templateUrl: './forgot.component.html',
  styles: [
  ]
})
export class ForgotComponent {

  email!: boolean
  emailForm!: FormControl
  canResend = true;


  constructor(private authBaseService: AuthBaseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {

      this.emailForm = this.fb.control('', [Validators.required,Validators.email])

  }
  ngAfterViewInit(): void {
  }

  send() {
    if (!this.canResend) {
      this.toastr.warning( 'Too many attemps, wait 60s', '400')
      return;
    }
    // Check if 60 seconds have passed since the last resend

    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }


    this.emailForm.disable();
    this.authBaseService.patchForgotPasswordSendJWT(this.emailForm.value).subscribe((response) => {
      console.log(response);
      this.emailForm.enable(); // Re-enable the form after successful resend
      this.canResend = false; // Set the flag to block further resends
      setTimeout(() => {
        this.canResend = true; // Allow resending again after 60 seconds
      }, 60000);
    });
  }
}
