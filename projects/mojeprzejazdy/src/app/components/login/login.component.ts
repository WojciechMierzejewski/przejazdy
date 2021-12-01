import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../../service/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authGuard: AuthGuard,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  username = '';
  password = '';
  submitted = false;
  login: FormGroup = new FormGroup({
    username: new FormControl(['', []]),
  });

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      username: ['', []],
    });
    this.authGuard.authenticate('', '');
  }
  onLogin(): void {
    const x = false;
    // const subscription = new Observable(x => { if(this.authGuard.authenticate('', '') === true)},);

    if (
      this.username == 'admin' &&
      this.password == 'admin' &&
      this.isFormSubmitted
    ) {
      this.router.navigate(['/overview']);
    } else {
    }
  }

  onSubmit(): void {
    this.submitted = true;
  }

  private isFormSubmitted(): boolean {
    return this.submitted;
  }

  getFormControl(username: string): any {}
}
