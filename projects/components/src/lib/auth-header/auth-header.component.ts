import { Component, Input } from '@angular/core';
export interface INavItem {
  title: string,
  onClick: () => void
}
@Component({
  selector: 'rb-auth-header',
  templateUrl: './auth-header.component.html',

})
export class AuthHeaderComponent {
  @Input() src!: string;

}
