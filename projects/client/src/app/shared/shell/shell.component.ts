import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthBaseService, LocalStorageService } from 'projects/auth-base/src/public-api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styles: [
  ]
})
export class ShellComponent implements OnInit {
  isAuth!: boolean | undefined

  constructor(private localStorageService: LocalStorageService) {
  }
  ngOnInit() {
    this.localStorageService.isAuth$.subscribe((isAuth) =>
      setTimeout(() => {
        this.isAuth = isAuth
      })
    )

  }

}
