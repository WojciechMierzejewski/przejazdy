import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
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
  ) { }

  username = '';
  password = '';
  submitted = false;
  login: FormGroup = new FormGroup({
    username: new FormControl('undefined', [Validators.required]),
    password: new FormControl('undefined', [Validators.required]),
  });

  ngOnInit(): void { }

  onLogin(): void {
    const x = false;
    // const subscription = new Observable(x => { if(this.authGuard.authenticate('', '') === true)},);

    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['/overview']);
    } else {
    }
  }

  onSubmit(): void {
    this.authService.authenticate(this.login.value).subscribe((resp) => {
      if (resp === true) {
        this.router.navigate(['/overview']);
      } else {
      }
    });
  }

  private isFormSubmitted(): boolean {
    return this.submitted;
  }

  getFormControl(name: string): FormControl {
    return this.login.get(name) as FormControl;
  }
}
