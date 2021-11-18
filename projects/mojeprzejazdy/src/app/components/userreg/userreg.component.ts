import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  submitted = false;
  registered = false;

  constructor(public formBuilder: FormBuilder) {
  }

  userForm: FormGroup = new FormGroup({
    first_name: new FormControl(undefined,
      [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$'),]),
    second_name: new FormControl(undefined,
      [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$'),]),
    address: new FormControl('',
      Validators.required),
    email: new FormControl(['',
      [Validators.required, Validators.email]]),
    phone: new FormControl(['',
      [Validators.required, Validators.pattern('^[1-9][0-9]*$')],]),
    password: new FormControl(undefined,
      [Validators.required, Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),]),
  })

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],],
      second_name: ['', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),],],

    })
  }

  invalidFirstName(): boolean {
    const result = !this.isFirstNameValid(this.userForm.controls.first_name_error) && !this.isFormSubmitted();
    console.log('invalid first name', result);
    return result;
  }

  isFirstNameValid(errors: ValidationErrors): boolean {
    return this.validateFirstName(errors);
  }

  validateFirstName(errors: ValidationErrors): boolean {
    return errors === null;
  }

  invalidSecondName() {

  }

  invalidAddress() {

  }

  invalidEmailAddress() {

  }

  invalidPhoneNo() {

  }

  invalidPassword() {

  }

  private isFormSubmitted(): boolean {
    return this.submitted;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid == true) {
      console.log('wrong data')
    } else {
      this.registered = true;
    }
  }
}
