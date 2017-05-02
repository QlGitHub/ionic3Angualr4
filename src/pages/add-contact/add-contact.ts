import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-provider";

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
  contactemail: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authPro: AuthService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContact');
  }

  addContact() {
    if (this.contactemail) {
      
    }
  }
}
