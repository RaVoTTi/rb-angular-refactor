import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
 @Input() title:string = '' 
 @Input() subtitle:string = '' 

}
