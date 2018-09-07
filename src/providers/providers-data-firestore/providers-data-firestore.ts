import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Product} from '../../datamodels/product';


@Injectable()
export class FirestoreProvider {

  constructor(public firestore : AngularFirestore) {
  }

  getProductListObs(): AngularFirestoreCollection<Product> {
    return this.firestore.collection('products');
  }



}
