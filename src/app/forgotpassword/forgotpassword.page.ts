import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email

  constructor(private authService:AuthenticationService ) { }

  ngOnInit() {
    
  }

  forgot(){
    this.authService.forgotpassword(this.email);
  }
}
