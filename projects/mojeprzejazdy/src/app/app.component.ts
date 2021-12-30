import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('Application root component on init...');
  }

  ngOnDestroy(): void {
    console.log('Application root component on destroy...')
  }

}
