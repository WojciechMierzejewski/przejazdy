import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from '../../../model/address';
import { Person } from '../../../model/person';
import { Transit } from '../../../model/transit';

export interface TransitDialogData {
  transit: Transit;
}

@Component({
  selector: 'app-transit-details',
  templateUrl: './transit-details.component.html',
  styleUrls: ['./transit-details.component.css']
})
export class TransitDetailsComponent implements OnInit {

  data?: Transit;

  constructor(@Inject(MAT_DIALOG_DATA) data: TransitDialogData) {
    this.data = data.transit;
  }

  ngOnInit(): void {
  }

  getPersons(): Person[] {
    return this.data?.group ?? [];
  }

  getAddresses(): Address[] {
    return this.data?.address ?? [];
  }

}
