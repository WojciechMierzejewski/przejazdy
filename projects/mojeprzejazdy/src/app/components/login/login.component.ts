import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  login = '';
  password = '';
  submitted = false;
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('admin', [Validators.required]),
    password: new FormControl('adminadmin', [Validators.required]),
  });

  ngOnInit(): void {}

  // onLogin(): void {
  //   const x = false;
  // const subscription = new Observable(x => { if(this.authGuard.authenticate('', '') === true)},);

  //   if (this.login == 'admin' && this.password == 'admin') {
  //     this.router.navigate(['/overview']);
  //   } else {
  //   }
  // }

  onSubmit(): void {
    this.submitted = true;
    this.authService.authenticate(this.loginForm.value).subscribe((resp) => {
      if (resp === true) {
        this.router.navigate(['/transits']);
      } else {
      }
    });
  }

  private isFormSubmitted(): boolean {
    return this.submitted;
  }

  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }
  btnClick() {
    this.router.navigateByUrl('/register');
  }
}
