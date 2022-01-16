import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      street: [''],
      streetNo: [''],
      city: [''],
      postcode: [''],
    });
  }

  ngOnInit(): void {}
}
