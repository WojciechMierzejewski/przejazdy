import { Address } from './address';

export interface Person {
  id: number;
  name: string;
  surname: string;
  address: Address;
  email: string;
  phone: number;
  login?: string;
  password: string;
}
