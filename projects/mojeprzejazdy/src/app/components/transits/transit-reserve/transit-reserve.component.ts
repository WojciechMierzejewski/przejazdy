import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Transit } from '../../../model/transit';

export interface TransitReserveData {
  transit?: Transit;
}
@Component({
  selector: 'app-transit-reserve',
  templateUrl: './transit-reserve.component.html',
  styleUrls: ['./transit-reserve.component.css'],
})
export class TransitReserveComponent implements OnInit {
  dialogTitle: string = 'Transit Reservation';

  constructor(private dialogRef: MatDialogRef<TransitReserveData>,
    @Inject(MAT_DIALOG_DATA) data: TransitReserveData) {
    this.dialogTitle = `Transit reservation ${data.transit?.id} ${data.transit?.points}`;
  }

  ngOnInit(): void { }

  addReservation(): void {
    // post data to backend - using transit id and user id
    // create new record in TransitUsers table
    // to have user id we have to change auth service which should keep user id
    // if post operation is successful, close the dialog
    // for example:
    of(true).subscribe({
      next: result => {
        if (result === true) {
          this.dialogRef.close();
        }
      },
      error: err => console.log(err)
    })
  }

}
