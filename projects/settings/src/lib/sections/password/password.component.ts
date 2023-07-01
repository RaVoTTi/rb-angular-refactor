import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IChangePassword } from 'interfaces/IChangePassword';
import { ValidatorsService } from 'projects/auth-user/src/lib/validators/validators.service';
import { SettingsService } from '../../services/settings.service';
import { ErrorHandlerService } from 'projects/utils/src/public-api';

@Component({
  selector: 'lib-password',
  templateUrl: './password.component.html'
})
export class PasswordComponent {
  passwordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vs: ValidatorsService,
    private settingsService: SettingsService,
    private errorH : ErrorHandlerService
  ) {
    this._initForm()
  }
  changePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    const { oldPassword, newPassword } = this.passwordForm.value as IChangePassword;


    this.settingsService
      .putChangePassword({ oldPassword, newPassword }).subscribe((response) => {
        this.passwordForm.reset()
      })
  }

  private _initForm() {
    this.passwordForm = this.formBuilder.group(
      {
        oldPassword: [
          '',
          [Validators.required, 
            this.vs.validatePat('passwordPat')
          ],
        ],
        newPassword: [
          '',
          [Validators.required, 
            this.vs.validatePat('passwordPat')
          ],
        ],
        newPassword2: ['', [Validators.required]],
      },
      {
        validators: [this.vs.passwordMismatch('newPassword', 'newPassword2')],
      }
    );
  }
  errorMsg(key: string){
    return this.errorH.errorMsg(this.passwordForm.controls[key]);

  }
}
