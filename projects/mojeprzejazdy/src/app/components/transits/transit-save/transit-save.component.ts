import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-transit-save',
  templateUrl: './transit-save.component.html',
  styleUrls: ['./transit-save.component.css'],
})
export class TransitSaveComponent implements OnInit {
  seats: number = 0;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(SaveDialog, {
      width: '250px',
      data: { seats: this.seats },
    });
  }
}
export class SaveDialog {
  constructor(
    public dialogRef: MatDialogRef<SaveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
