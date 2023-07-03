import { ModuleWithProviders, NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor, LoadingService, RetryInterceptor, StatusHandlerToastrInterceptor } from '../public-api';



@NgModule({
  declarations: [
  
    ErrorMsgDirective
  ],
  imports: [
  ],
  exports: [
    ErrorMsgDirective
  ],
  providers:[

  ]
})
export class UtilsModule {
static forRoot(): ModuleWithProviders<UtilsModule>{
  return {
    ngModule: UtilsModule,
    providers: [
      LoadingService,
      { provide: HTTP_INTERCEPTORS, useClass: StatusHandlerToastrInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  
    ]
  }
}

 }
