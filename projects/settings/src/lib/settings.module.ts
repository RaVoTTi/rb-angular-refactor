import { Component, NgModule } from '@angular/core';
import { SettingsComponent } from './pages/settings/settings.component';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './sections/password/password.component';
import { DetailsComponent } from './sections/details/details.component';
import { ImageComponent } from './sections/image/image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'projects/utils/src/public-api';
import { CashbackComponent } from './sections/cashback/cashback.component';
import { ReferralComponent } from './sections/referral/referral.component';

const routes: Routes = [

  {
    path: '',
    component: SettingsComponent,

  },


];


@NgModule({
  declarations: [

    SettingsComponent,
    PasswordComponent,
    DetailsComponent,
    ImageComponent,
    CashbackComponent,
    ReferralComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    UtilsModule
  ],
  exports: [
  ]
})
export class SettingsModule { }
