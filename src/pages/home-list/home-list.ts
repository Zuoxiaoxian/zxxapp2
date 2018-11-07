import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // 跳转页面
 import { ListDetailPage } from "../list-detail/list-detail";

@IonicPage()
@Component({
  selector: 'page-home-list',
  templateUrl: 'home-list.html',
})
export class HomeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeListPage');
  }

  goto(){
    console.log("跳转页面！")
    this.navCtrl.push(ListDetailPage);// 跳转页面
  }
  
}
