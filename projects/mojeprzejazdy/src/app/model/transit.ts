import { Address } from './address';

export interface Transit {
  id: number;
  points: string;
  address: Address[];
  valid: boolean;
  schedule: any;
}
