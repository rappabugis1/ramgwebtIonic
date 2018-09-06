import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Product} from '../../datamodels/product.interface';
/*
  Generated class for the ProvidersDataFirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  constructor(public firestore : AngularFirestore) {
  }

  getProductList(): AngularFirestoreCollection<Product> {
    return this.firestore.collection('products');

  }

}
