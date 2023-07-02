import { HttpErrorResponse } from "@angular/common/http";
import { IResponse } from "interfaces/IResponse";


export class RBHttpErrorResponse {
  status: number;
  error: IResponse;

  constructor( error: IResponse , status: number) {
    this.status = status;
    this.error = error;
  }
}