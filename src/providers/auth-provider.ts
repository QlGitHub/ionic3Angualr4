import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  public displayname : string;
  public email: string;
  
  constructor(public af: AngularFire) {
    
    //this.UserData = firebase.database().ref('/UserData');
  }

  loginwithEmail(email : string, password : string) : any {
    return this.af.auth.login({
      email: email,
      password: password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  loginwithGoogle() {
    return this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
        });
  }

  register(email: string, password: string) : any {
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }
  saveUserInfoFromForm(uid, email, password, name) {
    return this.af.database.object('RegisteredUsers/' + uid).set({
      email: email,
      password: password,
      displayname: name
    });
  }

  logout(): any {
    this.af.auth.logout();
  }
}
