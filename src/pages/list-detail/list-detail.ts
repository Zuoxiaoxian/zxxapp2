import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


//  资源
import {LISTMESSAGE} from "../../app/provider/list-messages";

@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public listmessage:LISTMESSAGE) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailPage');
    
  }
  get_data: any = this.listmessage.get_data;
  post_data:any = this.listmessage.post_data;
}
