import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Login } from '../login.login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          navCtrl.setRoot(Login);
        }
      });
  }

}
