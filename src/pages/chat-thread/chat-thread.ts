import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { Chat } from "../../models/chat.model";
import { Thread } from "../../models/thread.model";
import { ChatsProvider } from "../../providers/chats-provider";
import { FirebaseListObservable } from "angularfire2";

/**
 * Generated class for the ChatThread page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-chat-thread',
  templateUrl: 'chat-thread.html',
})
export class ChatThread {
  chats: FirebaseListObservable<any>;
  message: string;
  uid : string;
  interlocutor:string;
  chat: Chat;
  currentThread: Thread;


  constructor(public navCtrl: NavController, public navParams: NavParams, public chatsPro: ChatsProvider) {
    this.uid = navParams.data.uid;
    this.currentThread = navParams.data.thread;
    this.interlocutor = navParams.data.interlocutor;
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatThread');
  }
  
  sendPicture() {

  }

  sendMessage(){
      if (this.message) {
        this.chat.send_from = this.uid;
        this.chat.content = this.message;
        this.chat.thread = this.currentThread; 
        this.chat.isRead = true;
        //this.chatsPro.sendMessage(this.chat);
        this.message = "";
      }
  }
}
