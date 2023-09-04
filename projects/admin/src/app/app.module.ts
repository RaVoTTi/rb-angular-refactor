import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { UtilsModule } from 'projects/utils/src/public-api';
import { ComponentsModule } from 'projects/components/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
    // SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
