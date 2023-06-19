import { Component } from '@angular/core';
import { AuthBaseService, LocalStorageService } from 'projects/auth-base/src/public-api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styles: [
  ]
})
export class ShellComponent {
  isAuth$!: BehaviorSubject<boolean | undefined> 


  constructor(private localStorageService: LocalStorageService) {
    this.isAuth$ = this.localStorageService.isAuth$
  }
}
