import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  productLists: Product[] = [];
products: any;;
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
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
}
