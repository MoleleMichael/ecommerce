import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  userProfile

  constructor( private authService:AuthenticationService, private route:Router) {}

  ngOnInit(){
    this.userProfile = this.authService.userInfo
    console.log(this.userProfile);
  }
}
