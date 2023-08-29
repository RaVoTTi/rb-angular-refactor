import { Component } from "@angular/core";
import { LoadingService } from "projects/utils/src/public-api";
import { Observable } from "rxjs";

@Component({
  selector: 'lib-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss'],

})
export class AuthViewComponent  {
  isLoading$! : Observable<boolean>

  constructor(
    private loadingService: LoadingService
    ) {
      this.isLoading$ = this.loadingService.isLoading$

  }
  
 
}
