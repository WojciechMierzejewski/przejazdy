import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthGuard } from '../../service/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authGuard: AuthGuard, private router: AppRoutingModule) {}

  ngOnInit(): void {}
  onLogin(): void {
    const x=false;
    const subscription = new Observable(x => {this.authGuard.authenticate},);

    if () {
      this.router.navigate();
    } else { 
    }
  }
}
