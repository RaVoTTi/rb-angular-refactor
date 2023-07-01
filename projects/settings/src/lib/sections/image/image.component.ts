import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lib-image',
  templateUrl: './image.component.html',
  styles: [
  ]
})
export class ImageComponent {
  constructor(private toastr: ToastrService){

  }
  showInfo(){
    this.toastr.info('Coming Soon', '503');
    
  }

}
