import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { buyers } from './buyers';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: buyers

  constructor(private db: AngularFirestore, private fireAuth: AngularFireAuth, private router: Router) { }

  registerUser(buyers) {
    console.log(buyers)
    let message = ""

    firebase.auth().createUserWithEmailAndPassword(buyers.email, buyers.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    }).then(results => {

      console.log(results);

      if (results) {
        message = "successfully registered"
        firebase.database().ref('buyers/' + results.user.uid).set({
          fname: buyers.fName,
          lname: buyers.lName,
          email: buyers.email,
          // age: buyers.age,
          phonenumber: buyers.phonenumber
        });
        console.log(message);
        this.router.navigate(["products"])
      } else {

      }

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
        // # # # # # saving locally # # # # # \\
        localStorage.setItem('userID', user.user.uid);
        console.log(localStorage.getItem('userID'));
        console.log(message);
        this.router.navigate(["tab1"])
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

  logout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");

    }).catch(function (error) {
      console.log(error);

    });
  }

  getCurrentUser(){
   
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        var userId = user.uid;
       firebase.database().ref('/users/' + userId).once('value').then( userProfile =>{
          this.userInfo = new buyers(userProfile.val().fName, userProfile.val().lName, userProfile.val().phonenumber,userProfile.val().email,"" , userId )
          console.log(this.userInfo);
          // return userInfo
        })
      } else {
        console.log("user not logged in");
        
      }
    });

    
    
  }
}
