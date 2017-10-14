import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
// import { TranslateService } from '../lang/translate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  error: any;
  
  constructor(private productService: ProductService) { }
  
  hmm: string;
  
  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => {
        console.log("getProducts..." + products);
        this.products = products;
      })
      .catch(error => this.error = error);
  }
  
  ngOnInit() {
    console.log("getProducts...");
    this.getProducts();
      this.hmm = '<p>DAMN is here</p><p>This is second paragraph</p>' +
        '<a href="http://g.co/ng/security">Security Guide</a><img src="assets/e_white.jpg">';
    
  }
  
}
