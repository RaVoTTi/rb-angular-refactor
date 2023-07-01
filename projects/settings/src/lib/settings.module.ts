import { Component, NgModule } from '@angular/core';
import { SettingsComponent } from './pages/settings/settings.component';
import { ComponentsModule, SubHeaderComponent } from 'projects/components/src/public-api';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './sections/password/password.component';
import { DetailsComponent } from './sections/details/details.component';
import { CryptoAddressComponent } from './sections/crypto-address/crypto-address.component';
import { ImageComponent } from './sections/image/image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'projects/utils/src/public-api';

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
    CryptoAddressComponent,
    ImageComponent,
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
