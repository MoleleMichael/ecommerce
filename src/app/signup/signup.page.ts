import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { buyers } from '../buyers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  fName
  lName
  email
  phonenumber
  password
  users : buyers

  constructor( private authService : AuthenticationService) { }

  ngOnInit() {
  }

  signUp(){
    this.users = new buyers (this.fName,this.lName, this.email, this.phonenumber, this.password);
    this.authService.registerUser(this.users)
  }
}
