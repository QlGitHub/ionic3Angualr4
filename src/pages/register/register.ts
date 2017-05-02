import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../providers/auth-provider";
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public registerForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  fullnameChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public navCtrl: NavController, public authService: AuthService, public navParams: NavParams, public formBuilder: FormBuilder,
              public alertCtrl: AlertController, public loadingCtr: LoadingController, public alertCtr: AlertController) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      fullname:['']
    });
  }

  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  doRegister(event, email, password, fullname){
    this.submitAttempt = true;
    if (this.registerForm.valid) {
      this.authService.register(email, password).then((user) => {
        this.authService.saveUserInfoFromForm(user.uid, email, password, fullname).then(() =>{
          this.navCtrl.setRoot(HomePage);
        });
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
      //  this.loading = this.loadingCtr.create({
      //     dismissOnPageChange: true
      // });
      // this.loading.present();
    }
  }


}