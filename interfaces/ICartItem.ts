import { IMinIBook } from "./IMinIBook";
import { ISubject } from "./ISubject";

export interface ICartItem  extends IMinIBook{
    name: string;
    image: string;
    _id: string;
    price: number;
    subject: ISubject
}