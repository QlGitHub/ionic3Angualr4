import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule} from 'angularfire2';
import { AuthProvider } from '../providers/auth-provider';

import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

export const firebaseConfig= {
     apiKey: "AIzaSyBMy2MVkEuBbT8t8GM9pcTZHWf9NnyIues",
    authDomain: "ionic3-93dde.firebaseapp.com",
    databaseURL: "https://ionic3-93dde.firebaseio.com",
    projectId: "ionic3-93dde",
    storageBucket: "ionic3-93dde.appspot.com",
    messagingSenderId: "226520731691"

};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Register
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
