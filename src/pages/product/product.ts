import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ScrollHideConfig } from '../../directives/headerhider';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  @ViewChild(Content) content: Content;

  meniSakriven:boolean= false;
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 75 };

  product;
  products;
  productImgs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get('prod');
    this.products = navParams.get('products');
    this.productImgs=this.product.imgUrls;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  meniClick(){
    this.meniSakriven=!this.meniSakriven;
  }

  navBack(){
    this.navCtrl.pop();
  }
  
  scrollBottom(){
    if(this.content._scroll) this.content.scrollToBottom(0);
  }
  
}
