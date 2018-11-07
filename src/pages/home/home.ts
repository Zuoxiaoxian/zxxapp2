import { Component } from '@angular/core';
import { NavController, Slide } from 'ionic-angular';

import { ViewChild } from "@angular/core";
import { Slides } from 'ionic-angular';

// 跳转页面！
import {HomeListPage} from "../home-list/home-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  @ViewChild(Slides) slides: Slides;

  goToSlide(){
    this.slides.slideTo(2, 500);
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log("当前的 index 是：", currentIndex);
    let isend = this.slides.isEnd();
    console.log('是否是最后一张图片：', isend);
    if(isend === true){
      this.goto();
    }
  }

  // 跳转页面！
  goto(){
    console.log("跳转页面！")
    this.navCtrl.push(HomeListPage);// 跳转页面
  }

}
