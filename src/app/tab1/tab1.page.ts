import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  getData() {
      //  this.productLists = this.productService.getProducts();
    
      // this.productService.getAllProducts().subscribe(data => {
      //   this.products = data
    
      // });
    // this.productService.getAllProducts().subscribe((res)=>{
    //     this.productLists=res.map((product)=> {
    //       return{
    //         // ... product.payload.doc.data(),
    //         id:product.payload.doc.id
    //       } as Product
    //     })
    //   })
    // }

}
}