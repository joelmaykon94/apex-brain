import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'presentation-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string= "";

  constructor() { }

  ngOnInit() {
  }

  public login(event: any) {
    if (this.username && this.password) {
      console.log(this.username, this.password)
    }
  }
}
