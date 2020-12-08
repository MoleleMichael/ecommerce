import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  productLists: Product[] = [];

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(public productService: ProductService, private modalCtr:ModalController) { }

  ngOnInit() {
    this.getData();
    this.cart = this.productService.getCart();
    this.cartItemCount = this.productService.getCartItemCount();
  }

  getData() {
      //  this.productLists = this.productService.getProducts();
    
     this.productLists = this.productService.getProducts();
      // });
    // this.productService.getAllProducts().subscribe((res)=>{
    //     this.productLists=res.map((product)=> {
    //       return{
    //         ... product.payload.doc.data(),
    //         id:product.payload.doc.id
    //       } as Product
    //     })
    //   })
    }

    addToCart(product){
      this.productService.addProduct(product);
      // this.animateCSS('tada');
    }

    openCart(){
      
    }
}
