import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Register } from '../register/register';
import { HomePage } from '..home/home';
import { AuthProvider } from '../../providers/auth-provider';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  public loginForm;
  submitAttempt: boolean = false;
  loading : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider,
              public alertCtr: AlertController, public loadingCtr: LoadingController) {
  
  }

  register() {
    this.navCtrl.push(Register);
  }
  
  login() {
    this.submitAttempt = true;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password).then(
        auth => {
          this.navCtrl.setRoot(HomePage);
        }, 
        error => {
          this.loading.dismiss().then(()=> {
            let alert = this.alertCtr.create({
              message: error.message,
              buttons: [
                {
                  text : "OK",
                  role : 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
        this.loading = this.loadingCtr.create({
          dismissOnPageChange: true,
        });
        this.loading.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
