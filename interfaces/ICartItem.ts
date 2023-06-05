import { IMinIBook } from "./IMinIBook";
import { ISubject } from "./ISubject";

export interface ICartItem  extends IMinIBook{
    name: string;
    image: string;
    _id: string;
    minPrice: number;
    quantity: number


}