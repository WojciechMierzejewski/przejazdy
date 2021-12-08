import { Address } from './address';

export interface Transit {
  id: number;
  points: Address[];
  valid: boolean;
  schedules: Date[];
}
