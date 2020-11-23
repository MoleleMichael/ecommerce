import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email
  password
  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authServ.signInUser(this.email, this.password);
  }
}
