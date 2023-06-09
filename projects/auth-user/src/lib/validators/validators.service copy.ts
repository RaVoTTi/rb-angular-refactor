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

  validatePat(type: string ) {
    return (formControl: AbstractControl): ValidationErrors | null => {
      const value = formControl?.value;
      console.log(value)
      if (!this.pats[type].test(value)) {
        formControl.setErrors({ [type]: true });
        console.log(formControl.errors)
        return {
          [type]: true,
        };
      }
      formControl.setErrors(null);
      return null;
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
