import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire } from "angularfire2";
import * as firebase from 'firebase';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  
  constructor(public af: AngularFire) {
    console.log('Hello UserProvider Provider');
  }


  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  saveContactsInformation(contactName: string) {
    var displayName = this.getCurrentUser().displayName;
    if (!displayName) {

    }
    firebase.database().ref('Contacts/' + displayName).push(contactName);
  }

}
