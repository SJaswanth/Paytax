

import { Injectable, NgZone } from '@angular/core';
import { user } from "../services/user";
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning

  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        localStorage.getItem('user');
      } else {
        localStorage.setItem('user',"");
        localStorage.getItem('user');
      }
    });
  }


  // Sign in with email/password
  SignIn(email:string, password:string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result:any) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error: { message: any; }) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email:string, password:string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result:any) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error: { message: any; }) => {
        window.alert(error.message)
      })
  }


  // Send email verfificaiton when new user sign up
  // Email verification when new user register
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u =>
      u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: any) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  ContactForm(queryEmail: any,message:any) {
    return this.afAuth.sendPasswordResetEmail(queryEmail,message)
    .then(() => {
      window.alert('query email has sent, developer will get back to in 2 working');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return (user !== null ) ? true : false;

  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result:any) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error: any) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: { uid: any; email: any; displayName: any; photoURL: any; emailVerified: any; }) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
    const userData: user = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }


  employees()
  {
    this.router.navigate(['employee-profiles']);
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut()
    .then(() => {
      localStorage.clear();
      this.router.navigate(['sign-in']);
    })
  }


}
