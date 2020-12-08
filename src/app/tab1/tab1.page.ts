import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cart : any
  products : any
  cartItemCount: BehaviorSubject<number>;

  productLists: Product[] = [];

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  
  constructor(private productService : ProductService,  private modalCtr:ModalController, private sales:SalesService) {}
  

  ngOnInit() : void {
    this.getData();
    // this.cart = this.productService.getCart();
    this.cartItemCount = this.productService.getCartItemCount();
    this.sales.getCart()
  
  
  }

  getData() {
      this.productLists  = this.productService.getProducts()
      console.log( this.productLists  )
    
    }

    addToCart(product){
      this.productService.addProduct(product);
      // this.animateCSS('tada');
      // let id = product.id
      let userId = localStorage.getItem('userID')
      this.cart = {
        userID: userId,
        quantity: 1,
        product
      }
      console.log(this.cart);
  
      this.sales.addCart(this.cart)
  
    }

    openCart(){
      
    }
}
