import { Login } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-provider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isLoggedIn: boolean;
  public displayname: string;

  constructor(public navCtrl: NavController, public auth: AuthService) {
    this.auth.af.auth.subscribe((auth) => {
      if (auth == null) {
        navCtrl.setRoot(Login);
        this.isLoggedIn = false;
      } else {
        if(auth.google) {
          this.auth.displayname = auth.google.displayName;
          this.auth.email = auth.google.email;
        } else {
          this.auth.email = auth.auth.email;
        }
        this.isLoggedIn = true;
        this.displayname = this.auth.displayname;
      }
    });
  }

  logout() {
    this.auth.logout();
  }
  
  addContact(){

   }

}
