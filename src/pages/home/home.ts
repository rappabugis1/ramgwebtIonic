import { Component , ViewChild} from '@angular/core';
import { NavController, Platform, Content, Slides } from 'ionic-angular';

import {ScrollHideConfig} from '../../directives/headerhider';

import {FirestoreProvider} from '../../providers/providers-data-firestore/providers-data-firestore';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;
  @ViewChild('productSlides') slides: Slides;

  platW;
  meniSakriven:boolean =false;
  public products;
  slidesPerView :number=1;

  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 75 };

  slide1 ; slide2 ; slide3 ;

  constructor(public navCtrl: NavController,private fireStoreProvider: FirestoreProvider, public platform:Platform) {
    this.products = this.fireStoreProvider.getProductList().valueChanges();
    this.platW=this.platform.width();

    if(this.platW > 750)
    this.slidesPerView=3;
    else
      if(this.platW > 450)
      this.slidesPerView=2;


    if(this.platW > 450) {
      this.slide1="assets/imgs/slide1.jpg";
      this.slide2="assets/imgs/hope.jpg";
      this.slide3="assets/imgs/lopata.jpg";
    }else{
      this.slide1="assets/imgs/slide1-small.jpg";
      this.slide2="assets/imgs/hope-small.jpg";
      this.slide3="assets/imgs/lopata-small.jpg";
    }
  }

  scrollBottom(){
    if(this.content._scroll) this.content.scrollToBottom(0);
  }

  scrollTop(){
    if(this.content._scroll) this.content.scrollToTop(0);
  }

  scroll(){
    if(this.content._scroll) this.content.scrollTo(0,650,0);
  }

  hack(val){
    return Array.from(val);
  }
  
  meniClick(){
    this.meniSakriven=!this.meniSakriven;
  }

  ngOnInit() {
    this.products = this.fireStoreProvider.getProductList().valueChanges();
  }

  proslijediProduct(prod){
    this.navCtrl.push(ProductPage, {prod: prod, products:this.products });
  }

  buttonDesno(){
    this.slides.slideNext();
  }

  buttonLijevo(){
    this.slides.slidePrev();
  }

}