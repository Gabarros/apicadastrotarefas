import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contact: any;

  constructor(public navCtrl: NavController,  public navParams: NavParams
    , private toast: ToastController) {
   
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
