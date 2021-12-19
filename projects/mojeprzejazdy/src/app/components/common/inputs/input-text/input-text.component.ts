import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}

  getFormControl(): FormControl {
    console.log('nazwa ' + this.name);
    return this.formGroup.get(this.name) as FormControl;
  }

  getErrorMessage(): string {
    const fcErrors = this.getFormControl()?.errors;
    if (fcErrors) {
      const errors = Object.keys(fcErrors);
      if (errors.includes('required')) {
        return 'Wymagana wartość';
      }
      if (errors.includes('pattern')) {
        console.log('tu jest gen input');
        return 'Nieprawidłowy format';
      }
      return JSON.stringify(this.getFormControl()?.errors);
    }
    return '';
  }

  clearFormControlValue(): void {
    const fc = this.getFormControl();
    fc.setValue(null);
  }

  hasValue(): boolean {
    const fc = this.getFormControl();
    return fc.value !== null && fc.value !== undefined && fc.value !== '';
  }

  hasErrors(): boolean {
    const fc = this.getFormControl();
    console.log(fc.errors);
    return fc.errors ? true : false;
  }
}
