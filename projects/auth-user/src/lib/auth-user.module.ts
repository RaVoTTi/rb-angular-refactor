import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './shared/auth-view/auth-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from 'projects/components/src/public-api';
import { UtilsModule } from 'projects/utils/src/public-api';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ResendComponent } from './pages/resend/resend.component';

const routes: Routes = [
  {
    path: '',
    component: AuthViewComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'confirmation/:id',
        component: ConfirmationComponent,
      },
      {
        path: 'resend',
        component: ResendComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [AuthViewComponent, LoginComponent, SignupComponent, ConfirmationComponent, ResendComponent],
})
export class AuthUserModule { }
