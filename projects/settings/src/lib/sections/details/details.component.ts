import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'lib-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
  detailsForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,

  ) {
    this._initForm()
  }

  ngOnInit() {
    this.settingsService.getUserDetails().subscribe(({ result }) => {
      if (result) {

        this.detailsForm.patchValue(result)
      }
    })

    this.detailsForm
  }

  private _initForm() {
    this.detailsForm = this.formBuilder.group(
      {
        name: ['', [Validators.required,]],
        lastName: ['', [Validators.required,]],
        email: ['', [Validators.required,]],
        phone: ['', [Validators.required,]],
      },

    );
  }
}
