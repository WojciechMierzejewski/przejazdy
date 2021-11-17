import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  constructor() { }

  userForm: FormGroup = new FormGroup({})

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
