import { RegisterPage } from './../pages/register/register';
import { Login } from './../pages/login/login';
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
import { AngularFireModule } from 'angularfire2';
import { ThreadsPage } from "../pages/threads/threads";
import { ChatThread } from "../pages/chat-thread/chat-thread";
import { AddContact } from "../pages/add-contact/add-contact";
import { ChatsProvider } from "../providers/chats-provider";
import { UserProvider } from "../providers/user-provider";
import { AuthService } from "../providers/auth-provider";

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
    ThreadsPage,
    HomePage,
    TabsPage,
    Login,
    RegisterPage,
    ChatThread,
    AddContact
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
    ThreadsPage,
    HomePage,
    TabsPage,
    Login,
    RegisterPage,
    AddContact
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ChatsProvider,
    UserProvider
  ]
})
export class AppModule {}