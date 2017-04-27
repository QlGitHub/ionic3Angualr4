import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {
  public fireAuth: any;
  public UserData: any;
  constructor() {
    this.fireAuth = firebase.auth();
    this.UserData = firebase.database().ref('/UserData');
  }

  login(email : string, password : string) : any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) : any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newuser) => {
        this.UserData.child(newuser.uid).set({email: email});
      });
  }

  logout(): any {
    return this.fireAuth.signOut();
  }
}
