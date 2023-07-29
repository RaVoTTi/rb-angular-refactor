import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthBaseService } from 'projects/auth-base/src/public-api';
import { map, take } from 'rxjs';
import { ValidatorsService } from '../../validators/validators.service';

@Component({
  selector: 'lib-confirmation',
  templateUrl: './resend.component.html',
  styles: [
  ]
})
export class ResendComponent implements OnInit, AfterViewInit {

  email!: boolean
  emailForm!: FormControl


  constructor(private authBaseService: AuthBaseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private vs: ValidatorsService

  ) {

  }

  ngOnInit(): void {
    if (history?.state?.email && typeof (history.state.email) === 'string') {

      this.email = true
      const hideEmail = history.state.email

      this.emailForm = this.fb.control(hideEmail, this.vs.validatePat('email'))
    } else {
      this.email = false
      this.emailForm = this.fb.control('', this.vs.validatePat('email'))

    }
  }
  ngAfterViewInit(): void {
  }

  resend() {
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }
    this.authBaseService
      .patchEmailResendJWT(this.emailForm.value).subscribe((response) => {
        console.log(response)
         
      })
  }


}


