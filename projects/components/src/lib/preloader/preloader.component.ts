import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
  @Input() full: boolean = false
}
