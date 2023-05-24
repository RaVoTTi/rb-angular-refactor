import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-img',
  templateUrl: './img.component.html',
})
export class ImgComponent {
  @Input() src!: string;
}
