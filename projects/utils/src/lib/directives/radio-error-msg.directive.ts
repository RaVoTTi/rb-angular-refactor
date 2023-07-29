import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IMap } from 'interfaces/public-api';
import { debounceTime } from 'rxjs';

@Directive({
  selector: '[radioErrorMsg]'
})
export class RadioErrorMsgDirective {
  span!: HTMLSpanElement | null;

  input!: HTMLInputElement | null;
  
  private _errorMsgs: IMap = {
    email: 'Invalid email format.'}

  @Input() set errorMsg(control: AbstractControl) {
    control.statusChanges.pipe(debounceTime(1000)).subscribe((value) => {
      // if (!this.span) {
      //   this.span = this.renderer.createElement('div');
      //   // this.span = this.renderer.createElement('span');
      //   this.renderer.appen dChild(this.el.nativeElement.parentNode, this.span);
      // }
      let text;
      if (control.errors && control.dirty) {
        const firstError = Object.keys(control.errors)[0];
        const errorMsg = this._errorMsgs[firstError];
        this.renderer.removeClass(this.input, 'is-valid');
        this.renderer.removeClass(this.span, 'valid-feedback');
        this.renderer.addClass(this.input, 'is-invalid');
        this.renderer.addClass(this.span, 'invalid-feedback');
        text = this.renderer.createText(errorMsg);
        this.renderer.appendChild(this.span, text);
      } else if (value === 'VALID') {
        this.renderer.removeClass(this.input, 'is-invalid');
        this.renderer.removeClass(this.span, 'invalid-feedback');
            }
      if (control.dirty && this.span) {
        this.span.innerText = '';
        this.renderer.appendChild(this.span, text);
      }

      // if()
    });
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}
  ngAfterViewInit(): void {
    this.input = this.el.nativeElement.querySelector('input');
    this.span = this.el.nativeElement.querySelector('div');
  }

}
