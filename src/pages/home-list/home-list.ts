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

 // 资源
import {LISTMESSAGE} from "../../app/provider/list-messages";

 // 弹出....
import {PopoverController} from "ionic-angular";
import {ListPopoverctrlPage} from "../list-popoverctrl/list-popoverctrl";
// HTTP
import {HttpService} from "../../app/provider/httpservice";

@IonicPage()
@Component({
  selector: 'page-home-list',
  templateUrl: 'home-list.html',
})
export class HomeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public listmessage: LISTMESSAGE, public popoverCtrl: PopoverController,
     public httpservice: HttpService) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeListPage');
    this.httpservice.httpget("http://95.169.12.124/testapi?method=foobar&name=zxx&age=3qq");
    
    this.httpservice.httppost("http://95.169.12.124/testapi", 
    {
      method: "foobar",
      params: {
        name: "zxx",
        age: "小仙"
      },
      jsonrpc: "2.0",
      id: "0"
    })
  }

  goto(){
    console.log("跳转页面！")
    this.navCtrl.push(ListDetailPage);// 跳转页面
    
  }
  // 得到资源
  listmessages: any = this.listmessage.listmessage

  // 弹出框！
  presentPopover(myEvent){
    // create(component, data, opts)
    // component: object 组件的页面。
    // data：     object 要传递给Popover  html视图的任何数据！
    // opts：     PopoverOptions 弹出选项！
    let popover = this.popoverCtrl.create(ListPopoverctrlPage);
    popover.present({
      ev:myEvent
    })
  }


}
