import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'projects/auth-user/src/public-api';
import { take } from 'rxjs';
import { SettingsService } from '../../services/settings.service';
import { ICashback } from 'interfaces/ICashback';
import { environment } from 'environments/environment';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'lib-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent {
  referralForm!: FormGroup;



  FRONT_URL = environment.FRONT_URL
  total: number = 0

  constructor(
    private clipboard: Clipboard,
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
    private toastr: ToastrService
  ) {
    this._initForm();
  }
  ngOnInit() {
    this.settingsService.getUserDetails().subscribe(({ result }) => {
      if (result) {
        const referralCode = result.referralCode ?? ''
        const url = `${this.FRONT_URL}/#/auth/signup?referredBy=${referralCode}`
        this.referralForm.patchValue({referralCode, url})
      }
    })
    this.referralForm
  }

  private _initForm() {
    this.referralForm = this.formBuilder.group({
      url: ["", [Validators.required]],
      referralCode: ["", Validators.required],
    });
  }
  copyText(control: AbstractControl){
    this.clipboard.copy(control.value)
    this.toastr.success('Copy to clipboard', 'COPY')
  }




}
