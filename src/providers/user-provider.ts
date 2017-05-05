import { FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import { AngularFire } from "angularfire2";
import * as firebase from 'firebase';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

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

  getContacts(contactName: string): Observable<any> {
    let displayName = this.getCurrentUser().displayName;
    let promise = firebase.database().ref('Contacts/' + displayName).once('value');
    return Observable.fromPromise(<Promise<any>>promise);
  }

  saveContactsInformation(contactName: string) {
    var displayName = this.getCurrentUser().displayName;
    if (!displayName) {

    }
    return firebase.database().ref('Contacts/' + displayName).push(contactName);
  }

  saveContact(contactName: string): Observable<any> {
    let displayName = this.getCurrentUser().displayName;

    let promise = firebase.database().ref('RegisteredUsers').once('value');
    return Observable.fromPromise(<Promise<any>>promise)
      .switchMap(snapshot => {
        if (snapshot.hasChild(contactName)) {
          return firebase.database().ref('Contacts/' + displayName + '/' + contactName).set(true);
        }
      });
  }
}
