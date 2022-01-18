import { Address } from './address';
import { Person } from './person';

export interface Transit {
  id: number;
  points?: string;
  valid: boolean;
  schedule: any;
  address: Address[];
  transitUsers: Person[];
}
