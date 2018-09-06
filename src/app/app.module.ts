import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {EntryPage} from '../pages/entry/entry';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ScrollHideDirective} from '../directives/headerhider';

import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreProvider } from '../providers/providers-data-firestore/providers-data-firestore';
import { ProductPage } from '../pages/product/product';


export const firebaseConfig={
    apiKey: "AIzaSyCnEg9-4iEmt1DfDiPx_NiIK6vw4qYQ6Io",
    authDomain: "ramgtweb.firebaseapp.com",
    databaseURL: "https://ramgtweb.firebaseio.com",
    projectId: "ramgtweb",
    storageBucket: "ramgtweb.appspot.com",
    messagingSenderId: "930826613643"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EntryPage,
    ProductPage,
    ScrollHideDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EntryPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirestoreProvider
  ]
})
export class AppModule {}
