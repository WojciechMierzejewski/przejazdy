import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from '../../model/person';
import { EnrollmentService } from '../../service/enrollment.service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css'],
})
export class UserregComponent implements OnInit {
  submitted = false;
  registered = false;
  userForm: FormGroup = new FormGroup({});
  person: Person = new Person();

  private dataSubscription: Subscription = Subscription.EMPTY;

  constructor(
    public formBuilder: FormBuilder,
    private dataService: EnrollmentService
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],
      ],
      surname: [
        '',
        [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{3,}$')],
      ],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
      login: [
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
      !this.isFormControlValid(this.userForm.controls.name.errors) &&
      !this.isFormSubmitted();
    console.log('invalid first name', result);
    return result;
  }

  invalidSecondName(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.surname.errors) &&
      !this.isFormSubmitted();
    console.log('invalid sname', result);
    return result;
  }

  invalidAddress(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.address.errors) &&
      !this.isFormSubmitted();
    console.log('invalidAddress:', result);
    return result;
  }

  invalidEmailAddress(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.email.errors) &&
      !this.isFormSubmitted();
    console.log('invalidEmail:', result);
    return result;
  }

  invalidPhoneNo(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.phone.errors) &&
      !this.isFormSubmitted();
    console.log('invalidPhone:', result);
    return result;
  }

  // isPhoneValid(errors: ValidationErrors | null): boolean {
  //   return this.validatePhone(errors);
  // }

  // validatePhone(errors: ValidationErrors | null): boolean {
  //   return errors === null;
  // }

  invalidPassword(): boolean {
    const result =
      !this.isFormControlValid(this.userForm.controls.password.errors) &&
      !this.isFormSubmitted();
    console.log('invalidPasswd:', result);
    return result;
  }

  isFormControlValid(errors: ValidationErrors | null): boolean {
    return this.validateFormControl(errors);
  }

  validateFormControl(errors: ValidationErrors | null): boolean {
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
      console.log(this.userForm);
      this.person = new Person(this.userForm.value);
      this.dataSubscription.unsubscribe();
      this.dataSubscription = this.dataService.enroll(this.userForm.value).subscribe();
    }
  }

  getFormControl(name: string): FormControl {
    return this.userForm.get(name) as FormControl;
  }

  clearFormControlValue(name: string): void {
    const fc = this.getFormControl(name);
    fc.setValue(null);
  }

  hasValue(name: string): boolean {
    const fc = this.getFormControl(name);
    return fc.value !== null && fc.value !== undefined && fc.value !== '';
  }

  getErrorMessage(name: string): string {
    const fcErrors = this.getFormControl(name)?.errors;
    if (fcErrors) {
      const errors = Object.keys(fcErrors);
      if (errors.includes('required')) {
        return 'Wymagana wartość';
      }
      if (errors.includes('pattern')) {
        return 'Nieprawidłowy format';
      }
      return JSON.stringify(this.getFormControl(name)?.errors);
    }
    return '';
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
