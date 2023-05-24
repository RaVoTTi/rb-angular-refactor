import { Component, Input } from '@angular/core';
export interface INavItem {
  title: string,
  onClick: () => void
}
@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() src!: string;

}
