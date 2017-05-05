import { UserProvider } from './../../providers/user-provider';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-provider";
import * as firebase from 'firebase';

/**
 * Generated class for the AddContact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContact {
  contactName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authSer: AuthService, public UserSer: UserProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContact');
  }

  addContact() {
    if (this.contactName) {
      this.UserSer.saveContact(this.contactName)
        .subscribe(() => this.navCtrl.setRoot(HomePage));
    }
  }
}
