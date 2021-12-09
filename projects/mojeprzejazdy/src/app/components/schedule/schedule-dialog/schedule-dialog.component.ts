import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ScheduleDialogData {
  date: Date;
  time: string;
}

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    date: new FormControl(),
    time: new FormControl()
  });

  constructor(@Inject(MAT_DIALOG_DATA) private data: ScheduleDialogData) {
    this.formGroup.patchValue(this.data);
  }

  ngOnInit(): void {
  }

  getFormControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  onClick(): void {
    console.log(this.formGroup.value);
  }
}
