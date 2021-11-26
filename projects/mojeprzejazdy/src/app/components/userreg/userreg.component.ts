import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css'],
})
export class UserregComponent implements OnInit {
  submitted = false;
  registered = false;

  userForm: FormGroup = new FormGroup({
    first_name: new FormControl(undefined, [
      Validators.required,
      Validators.pattern('^[A-Z]{1}[a-z]{3,}$'),
    ]),
    second_name: new FormControl(undefined, [
      Validators.required,
      Validators.pattern('^[A-Z]{1}[a-z]{3,}$'),
    ]),
    home_address: new FormControl('', Validators.required),
    email_address: new FormControl([
      '',
      [Validators.required, Validators.email],
    ]),
    phone: new FormControl([
      '',
      [Validators.required, Validators.pattern('^[1-9][0-9]*$')],
    ]),
    password: new FormControl([
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ],
    ]),
  });

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: [
        '',
        [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],
      ],
      second_name: [
        '',
        [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],
      ],
      home_address: ['', [Validators.required]],
      email_address: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
    });
  }

  invalidFirstName(): boolean {
    const result =
      !this.isFirstNameValid(this.userForm.controls.first_name.errors) &&
      !this.isFormSubmitted();
    console.log('invalid first name', result);
    return result;
  }

  isFirstNameValid(errors: ValidationErrors | null): boolean {
    return this.validateFirstName(errors);
  }

  validateFirstName(errors: ValidationErrors | null): boolean {
    return errors === null;
  }

  invalidSecondName(): boolean {
    const result =
      !this.isSecondNameValid(this.userForm.controls.second_name.errors) &&
      !this.isFormSubmitted();
    console.log('invalid sname', result);
    return result;
  }

  isSecondNameValid(errors: ValidationErrors | null): boolean {
    return this.validateSecondName(errors);
  }

  validateSecondName(errors: ValidationErrors | null): boolean {
    return errors === null;
  }

  invalidAddress(): boolean {
    const result =
      !this.isAddressValid(this.userForm.controls.home_address.errors) &&
      !this.isFormSubmitted();
    console.log('invalidAddress:', result);
    return result;
  }

  isAddressValid(errors: ValidationErrors | null): boolean {
    return this.validateAddress(errors);
  }

  validateAddress(errors: ValidationErrors | null): boolean {
    return errors === null;
  }

  invalidEmailAddress(): boolean {
    const result =
      !this.isEmailValid(this.userForm.controls.email_address.errors) &&
      !this.isFormSubmitted();
    console.log('invalidEmail:', result);
    return result;
  }

  isEmailValid(errors: ValidationErrors | null): boolean {
    return this.validateEmail(errors);
  }

  validateEmail(errors: ValidationErrors | null): boolean {
    return errors === null;
  }

  invalidPhoneNo(): boolean {
    const result =
      !this.isPhoneValid(this.userForm.controls.phone.errors) &&
      !this.isFormSubmitted();
    console.log('invalidPhone:', result);
    return result;
  }

  isPhoneValid(errors: ValidationErrors | null): boolean {
    return this.validatePhone(errors);
  }

  validatePhone(errors: ValidationErrors | null): boolean {
    return errors === null;
  }

  invalidPassword(): boolean {
    const result =
      !this.isPasswordValid(this.userForm.controls.password.errors) &&
      !this.isFormSubmitted();
    console.log('invalidPasswd:', result);
    return result;
  }

  isPasswordValid(errors: ValidationErrors | null): boolean {
    return this.validatePassword(errors);
  }

  validatePassword(errors: ValidationErrors | null): boolean {
    return errors === null;
  }

  private isFormSubmitted(): boolean {
    return this.submitted;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid == true) {
      console.log('wrong data');
    } else {
      this.registered = true;
    }
  }

  getFormControl(name: string): FormControl {
    return this.userForm.get('first_name') as FormControl;
  }
}
