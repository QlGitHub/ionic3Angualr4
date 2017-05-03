import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { UserProvider } from "./user-provider";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the ChatsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChatsProvider {
  threads: FirebaseListObservable<any>;
  constructor(public http: Http, public af : AngularFire, public userPro : UserProvider) {
  }


  getThreads() {
    // return this.userPro.getUid().then((uid) => {
    //     this.threads = this.af.database.list('ThreadTable/${uid}');
    //     return this.threads;
    // });
  }

}
