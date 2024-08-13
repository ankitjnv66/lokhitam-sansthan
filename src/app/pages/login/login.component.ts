import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  loginData = {
    username : '',
    password : ''
  }

  constructor() {}

  loginUser() { 
    console.log('login form submitted!!');
  }
}
