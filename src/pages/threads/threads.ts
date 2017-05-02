import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { ChatsProvider } from "../../providers/chats-provider";
import { FirebaseListObservable } from "angularfire2";


@Component({
  selector: 'page-threads',
  templateUrl: 'threads.html'
})
export class ThreadsPage {
    threads: FirebaseListObservable<any>;

    constructor(public chatsPro: ChatsProvider){
      this.chatsPro.getThreads().then((threads) =>{
        this.threads.map(thread =>{

        });
      });
    }

    addContact(){

    }
   
}