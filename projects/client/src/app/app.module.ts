import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthBaseModule, JwtInterceptor } from 'projects/auth-base/src/public-api';
import { ShellComponent } from './shell/shell.component';
import { ComponentsModule } from 'projects/components/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ShellModule,
    HomeModule,
    HttpClientModule,
    ComponentsModule,

    AuthBaseModule.forRoot(),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
