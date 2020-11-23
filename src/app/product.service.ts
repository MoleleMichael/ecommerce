import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }
  product: any = []

  getProducts() {
    this.db.collection("products").snapshotChanges().subscribe(results => {
      results.forEach((doc) => {
        this.product.push(doc.payload.doc.data())
        this.product.map(prod => {
          prod['id'] = doc.payload.doc.id;
        })
        // console.log(this.product);
      });
    });
    return this.product
  }
}

