import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private db: AngularFirestore, private fireAuth: AngularFireAuth, private router:Router) { }

  registerUser(buyers) {

    firebase.auth().createUserWithEmailAndPassword(buyers.email, buyers.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    }).then(results => {
      console.log("successfull");

    });
  }

  signInUser(email, password) {
    let user: any
    let message = ""

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      message = errorMessage
      // ...
    }).then(result => {
      user = result
      console.log(result);
      if (user) {
        message = user.user.email + "Has successfully logged in"
        console.log(message);
        this.router.navigate(["products"])
      } else {
        console.log(message);
      }
      return user.user.email
    });
  }

  forgotpassword(passwordResetEmail) {
    //   var user = firebase.auth().currentUser;
    // var newPassword = getASecureRandomPassword();
    // user.updatePassword(newPassword).then(function() {
    //   // Update successful.
    // }).catch(function(error) {
    //   // An error happened.
    // });

    return this.fireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
        this.router.navigate(["login"])
      }).catch((error) => {
        window.alert(error)
      });
  }
}
