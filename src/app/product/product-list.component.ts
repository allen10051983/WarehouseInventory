import { Component, OnInit } from '@angular/core';

import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  key: string = 'productname'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  pageTitle: string = "Product List";
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refreshProducts();
  }

  removeProduct(product: IProduct) {
    if (confirm('Are you sure to remove this Product?')) {
      this.productService.DeleteProduct(product)
        .then(() => {
          alert('Product removed!');
          this.refreshProducts();
        });
        
    }
  }

  private refreshProducts(){
    this.productService.GetProducts().then(products => this.products = products);
  }
}
