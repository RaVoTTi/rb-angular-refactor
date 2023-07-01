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
import { StatusHandlerToastrInterceptor } from 'projects/utils/src/lib/services/status-handler-toastr.interceptor';
import { LoadingInterceptor, LoadingService, UtilsModule } from 'projects/utils/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
        
    ToastrModule.forRoot(), 
    
    AuthBaseModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HomeModule,
    UtilsModule

  ],
  providers: [
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },

    { provide: HTTP_INTERCEPTORS, useClass: StatusHandlerToastrInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },

    // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
