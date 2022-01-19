import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  MatDialogRef
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Transit } from '../../../model/transit';
import { TransitService } from '../../../service/transit.service';

@Component({
  selector: 'app-transit-save',
  templateUrl: './transit-save.component.html',
  styleUrls: ['./transit-save.component.css'],
})
export class TransitSaveComponent implements OnInit, OnDestroy {
  seats: number = 1;
  private subscription = Subscription.EMPTY;
  private transit!: Transit;

  constructor(
    private dialogRef: MatDialogRef<TransitSaveComponent>,
    private transitService: TransitService) {
    this.transit = {
      id: 0,
      valid: true,
      schedule: new Date(),
      address: [],
      transitUsers: [],
      seats: 0
    };
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createTransit(): void {
    this.transit.seats = this.seats;
    this.subscription.unsubscribe();
    this.subscription = this.transitService.createTransit(this.transit)
      .subscribe({
        next: val => {
          console.log('zapisany!!!');
          this.dialogRef.close();
        },
        error: err => console.error(err)
      })
  }

}

