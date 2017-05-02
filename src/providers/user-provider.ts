import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { AngularFire } from "angularfire2";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http, public local: Storage, public af: AngularFire) {
    console.log('Hello UserProvider Provider');
  }

  getUid() {
    return this.local.get('uid');
  }

  getCurrentUser() {
    return this.getUid().then((uid)=>{
      return this.af.database.object('/users/${uid}');
    });  
  }

  containsUser() {
  }

}
