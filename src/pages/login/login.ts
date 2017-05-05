import { FormBuilder, Validators } from '@angular/forms';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AuthService } from "../../providers/auth-provider";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  public loginForm;
  submitAttempt: boolean = false;
  loading : any;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthService,
              public alertCtr: AlertController, public loadingCtr: LoadingController, public formbuilder: FormBuilder) {
              let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
              this.loginForm = formbuilder.group({
                  email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
                  password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
              });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
  
  elementChanged(input){
     let field = input.inputControl.name;
      this[field + "Changed"] = true;
  }

  login() {
    this.submitAttempt = true;
    if (this.loginForm.valid) {
      this.auth.loginwithEmail(this.loginForm.value.email, this.loginForm.value.password).then((data) => {
          this.navCtrl.setRoot(HomePage);
      }).catch((error) => {
          if(error) {
            this.loading.dismiss().then(() =>{
              let alert = this.alertCtr.create({
                message: error,
                buttons: [{
                  text: "OK",
                  role:'cancel'
                }]
              });
              alert.present();
            })
          }
      });
      this.loading = this.loadingCtr.create({
          dismissOnPageChange: true
      });
      this.loading.present();
    }
  }

  loginwithGoogle() {
   this.auth.loginwithGoogle().subscribe(() => {
     this.navCtrl.setRoot(HomePage);
   });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
