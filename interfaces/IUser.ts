import { IAddress } from './IAddress';

export interface IUser {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  state: boolean;
  phone: number;
  isAdmin?: boolean;
  dateCreated?: Date;
  password?: string;
  referralCode?: string;
  referredBy?: string;
  

}

export const exampleIUser: IUser ={
  _id: 'string',
  name: 'string',
  lastName: 'string',
  email: 'string',
  state: true,
  phone: 123123123,
}
