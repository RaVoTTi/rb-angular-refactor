import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

interface IMap {
  // [key: string]: {
  //   [key: string]: string;
  // };
  [key: string]: string;
}
@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements AfterViewInit {
  private _errorMsgs: IMap = {
    email: 'Invalid email format.',
    name: 'Invalid text format.',

    phone: 'Invalid phone number.',
    password:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one symbol.',
    required: 'This field is required.',
    mismatch: 'Passwords do not match.',
    equalTo: 'Please enter the correct option',
    invalid: 'It is incorrect',
    minlength: 'Minimum length must be {{ requiredLength }} characters.',
    maxlength: 'Maximum length allowed is {{ requiredLength }} characters.',
    pattern: 'Invalid input format.',
    unique: 'This value is already taken.',
    creditCard: 'Invalid credit card number.',
    url: 'Invalid URL format.',
    date: 'Invalid date format.',
    minValue: 'Value must be greater than or equal to {{ minValue }}.',
    maxValue: 'Value must be less than or equal to {{ maxValue }}.',
    range: 'Value must be between {{ min }} and {{ max }}.',
    minLengthArray: 'The array must have at least {{ requiredLength }} items.',
    maxLengthArray: 'The array can have at most {{ requiredLength }} items.',
    minSelections: 'You must select at least {{ min }} items.',
    maxSelections: 'You can select at most {{ max }} items.',
    alpha: 'Only alphabetic characters are allowed.',
    alphaNumeric: 'Only alphabetic and numeric characters are allowed.',
    number: 'Only numeric characters are allowed.',
    integer: 'Only whole numbers are allowed.',
    decimal: 'Only decimal numbers are allowed.',
    greaterThan: 'Value must be greater than {{ minValue }}.',
    lessThan: 'Value must be less than {{ maxValue }}.',

    BTC: 'Crypto pattern is incorrect',
    ETH: 'Crypto pattern is incorrect',
    XRP: 'Crypto pattern is incorrect',
    LTC: 'Crypto pattern is incorrect',
    BCH: 'Crypto pattern is incorrect',
    EOS: 'Crypto pattern is incorrect',
    XLM: 'Crypto pattern is incorrect',
    ADA: 'Crypto pattern is incorrect',
    XMR: 'Crypto pattern is incorrect',
    DASH: 'Crypto pattern is incorrect',

    // emailUsed: 'Please enter other email address',
  };
  private _succesMsgs: IMap = {
    generic : "Success! You've done it.",
    email: 'Valid email format.',
    phone: 'Valid phone number.',
    password: 'Great! Your password is strong.',
    firstName: 'First name is valid.',
    lastName: 'Last name is valid.',
    age: 'Age is valid.',
    address: 'Address is valid.',
    city: 'City is valid.',
    country: 'Country is valid.',
    postalCode: 'Postal code is valid.',
    creditCard: 'Credit card number is valid.',
    website: 'Website URL is valid.',
    dateOfBirth: 'Date of birth is valid.',
    favoriteColor: 'Favorite color is valid.',
    membershipStatus: 'Membership status is valid.',
    securityCode: 'Security code is valid.',
  };

  private _valid = `<div class="valid-feedback"></div>`;

  span!: HTMLSpanElement | null;

  input!: HTMLInputElement | null;

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
        this.renderer.addClass(this.input, 'is-valid');
        this.renderer.addClass(this.span, 'valid-feedback');
        text = this.renderer.createText(this._succesMsgs['generic']);
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
