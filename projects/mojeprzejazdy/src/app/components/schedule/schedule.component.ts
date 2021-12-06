import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';

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
    const dialogRef = this.dialog.open(ScheduleDialogComponent);

<<<<<<< HEAD
    dialogRef.afterClosed().subscribe((result) => {
=======
    this.subscription = dialogRef.afterClosed().subscribe(result => {
>>>>>>> a0d64954d92b54065090fc4fa6e67b62a0064eae
      console.log(`Rezultat: ${result}`);
    });
  }
}
