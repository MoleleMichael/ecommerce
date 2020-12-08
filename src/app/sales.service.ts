import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  // userID = localStorage.getItem('userID').toString()

  constructor(private db:AngularFirestore, private auth:AuthenticationService) { }

  
  getCart(){
  //   this.db.collection('cart', ref => ref.where('userID', '==', this.userID) ).valueChanges().subscribe(val =>{
  //     console.log(val);
  // })
}

addCart(product){

  this.db.collection('cart').add(product).then(results => {
    console.log("added");
  }
  ).catch(err => {
    console.log(err);
  })
}
}
