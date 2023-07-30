import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthBaseService, LocalStorageService } from 'projects/auth-base/src/public-api';
import { LoadingService } from 'projects/utils/src/lib/services/loading.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],

  styles: [
  ]
})
export class ShellComponent implements OnInit {
  isAuth!: boolean | undefined
  isLoading$! : Observable<boolean>
  constructor(
    private localStorageService: LocalStorageService,
    private loadingService: LoadingService
    ) {
      this.isLoading$ = this.loadingService.isLoading$

  }
  ngOnInit() {
    this.localStorageService.isAuth$.subscribe((isAuth) =>
      setTimeout(() => {
        this.isAuth = isAuth

      })
    )

  }

}
