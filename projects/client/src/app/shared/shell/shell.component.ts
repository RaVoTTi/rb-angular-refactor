import { Component } from '@angular/core';
import { LocalStorageService } from 'projects/auth-base/src/public-api';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styles: [
  ]
})
export class ShellComponent {
  isAuth! : boolean
constructor(private localStorageService: LocalStorageService){
  this.isAuth = !!this.localStorageService.getToken()
}
}
