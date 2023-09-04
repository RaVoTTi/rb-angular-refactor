import { Component } from '@angular/core';
import { LoadingService } from 'projects/utils/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // isLoading$!: Observable<boolean>
  // constructor(
  //   private loadingService: LoadingService
  // ) {
  //   this.isLoading$ = this.loadingService.isLoading$

  // }
}
