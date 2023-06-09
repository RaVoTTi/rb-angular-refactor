import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

interface IPat {
  [key: string]: RegExp;
}

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  pats: IPat = {
    emailPat:
      /^([a-z0-9._%+-]+@(((\bgmail\b))|(\boutlook\b)|(\blive\b)|(\byahoo\b)|(\bhotmail\b)|(\btest\b))+(\.[a-z]{2,4}$))/,
    passwordPat: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,12}$/,
    namePat:
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,12}$/,
    minMaxPat: /^.{2,4}$/,
    phone: /^[0-9]{9,15}$/,
    BTC: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,
    ETH: /^0x[a-fA-F0-9]{40}$/,
    XRP: /^r[0-9a-zA-Z]{24,34}$/,
    LTC: /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/,
    BCH: /^[qQ][a-zA-Z0-9]{41}$/,
    EOS: /^EOS[a-zA-Z0-9]{40}$/,
    XLM: /^G[A-Z0-9]{55}$/,
    ADA: /^DdzFFzCqrh...$/,
    XMR: /^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/,
    DASH: /^X[1-9A-HJ-NP-Za-km-z]{33}$/,

    // phoneInt: RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
    // ltcPat: /^{2,15}$/,
  };
  //

  passwordMismatch(camp1: string, camp2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const one = formGroup.get(camp1)?.value;
      const two = formGroup.get(camp2)?.value;

      if (one != two) {
        formGroup.get(camp2)?.setErrors({ mismatch: true });
        return {
          mismatch: true,
        };
      }
      formGroup.get(camp2)?.setErrors(null);
      return null;
    };
  }
  isNotIn(array: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (array.includes(value)) {
        control.setErrors(null);
        return null;
      }
      control.setErrors({ isNotIn: true });
      return {
        isNotIn: true,
      };
    };
  }
  validatePat(type: string) {
    return (formControl: AbstractControl): ValidationErrors | null => {
      const value = formControl?.value;
      const regExp = this.pats[type];
      if (typeof value === 'string' && !regExp.test(value)) {
        formControl.setErrors({ [type]: true });
        if (type === 'ETH' ) {
          console.log('ETH');
          console.log(value);
          console.log(regExp.test(value));
        }
        return {
          [type]: true,
        };
      }else{
        formControl.setErrors(null);
        return null;

      }

    };
  }
  equalToValidator(expectedValue: any) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value !== expectedValue) {
        control.setErrors({ equalTo: false });

        return { equalTo: true };
      }
      control.setErrors(null);

      return null;
    };
  }
  valid(expectedValue: any) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value !== expectedValue) {
        control.setErrors({ equalTo: false });

        return { equalTo: true };
      }
      control.setErrors(null);

      return null;
    };
  }
}
