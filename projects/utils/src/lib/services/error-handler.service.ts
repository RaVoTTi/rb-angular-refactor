import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

interface IError {
  // [key: string]: {
  //   [key: string]: string;
  // };
  [key: string]: string;
}
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  // errorsMsg: IError = {
  //   name: {
  //     namePat: '*It have to be letter'
  //   },
  //   lastName: {
  //     namePat: '*It have to be letter'
  //   },
  //   email: {
  //     emailPat: 'Please enter a valid email address'
  //   },
  //   phone: {
  //     phonePat: "Please enter your phone number in the format xxx-xxxx"
  //   },
  //   password: {
  //     passwordPat: 'Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number.'
  //   },
  //   password2: {
  //     mismatch: 'Passwords have to be equals'
  //   },

  // };
  private _msgs: IError = {
    namePat: 'It have to be letters',
    emailPat: 'Please enter a valid email address',
    phonePat: 'Please enter your phone number in the format xxx-xxxx',
    passwordPat:
      'Your password needs to be between 8 and 12 characters long and contain at least one uppercase letter and one number.',
    mismatch: 'Passwords have to be equals',
    required: 'This field is required',
    equalTo: 'Please enter the correct option',
    invalid: 'It is incorrect',
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

  // constructor() { }

  errorMsg(formControl: AbstractControl): string | null {
    if(formControl.errors && formControl.touched){
      const firstError = Object.keys(formControl.errors)[0];
      return this._msgs[firstError] ;
    }
    return null
  }




}
