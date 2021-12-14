import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  ScheduleDialogComponent,
  ScheduleDialogData,
} from './schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  private subscription = Subscription.EMPTY;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDodajClick(event: Event): void {
    const dialogConfig: MatDialogConfig<ScheduleDialogData> = {
      data: {
        date: new Date(),
        time: formatDate(new Date(), 'HH:mm', 'en-us'),
      },
    };
    const dialogRef = this.dialog.open(ScheduleDialogComponent, dialogConfig);
    this.subscription.unsubscribe();
    this.subscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }
}
