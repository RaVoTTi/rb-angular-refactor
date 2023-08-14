import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthBaseModule, JwtInterceptor, UnauthorizedInterceptor } from 'projects/auth-base/src/public-api';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { LoadingInterceptor, RetryInterceptor, StatusHandlerToastrInterceptor, UtilsModule } from 'projects/utils/src/public-api';
import { environment } from 'environments/environment';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
        
    ToastrModule.forRoot({
      maxOpened: 3,
      preventDuplicates: true
    }), 
    NgxStripeModule.forRoot(environment.STRIPE),
    AuthBaseModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HomeModule,
    UtilsModule.forRoot()

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    
    
    // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
