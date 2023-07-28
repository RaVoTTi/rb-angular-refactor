import { IBook } from './IBook';
import { IUser } from './IUser';

export interface IOrder {
  _id: string;
  user: IUser;
  books: IBook[];
  state: boolean;
  price: number;
  condition:
    | 'place order'
    | 'purchased'
    | 'pending cashback'
    | 'claimable cashback'
    | 'claimed cashback'
    | 'refunded'
    | 'failed';
  dateCreated: Date;
  dateClaimable: Date;



}
