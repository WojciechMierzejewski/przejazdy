import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthGuard } from '../../service/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authGuard: AuthGuard, private router: Router) {}

  ngOnInit(): void {
    this.authGuard.authenticate('', '');
  }
  onLogin(): void {
    const x = false;
    // const subscription = new Observable(x => { if(this.authGuard.authenticate('', '') === true)},);

    if (true) {
      this.router.navigate(['/home']);
    } else {
    }
  }
}
