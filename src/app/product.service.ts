import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor(private db: AngularFirestore ) { }
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

  getCart(){
    return this.cart
  }

  getCartItemCount(){
    return this.cartItemCount
  }

  addProduct(product ){
  //   let added = false;
  //   for (let p of this.cart) {
  //     if (p.id === product.id) {
  //       p.amount += 1;
  //       added = true;
  //       break;
  //     }
  //   }
  //   if (!added) {
  //     product.amount = 1;
  //     this.cart.push(product);
  //   }
   this.cartItemCount.next(this.cartItemCount.value + 1);
   }

  decreaseProduct(product){

  }

  removeProduct(product){

  }
}

