import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// 导入组件
import { HomeListPageModule } from "../pages/home-list/home-list.module";
import { ListDetailPageModule } from "../pages/list-detail/list-detail.module";
import {ListPopoverctrlPageModule} from "../pages/list-popoverctrl/list-popoverctrl.module";
// 导入资源
import {LISTMESSAGE} from "./provider/list-messages";

//http
import {HttpService} from "../app/provider/httpservice";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    // 导入组件
    HomeListPageModule,
    ListDetailPageModule,
    ListPopoverctrlPageModule,
    // http
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // 声明导入的资源
    LISTMESSAGE,
    // http
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
