import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from '../models/product';
import { ICategory } from '../models/category';

import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html'
})
export class ProductNewComponent implements OnInit {
  product: IProduct;
  categories: ICategory[];

  errorMessage: string;

  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.initProduct();
    this.categoryService.getCategories()
      .then(categories => this.categories = categories)
      .catch(this.handleError);
  }

  addProduct(product: IProduct){
    this.productService.CreateProduct(product)
      .then(()=>{
        this.initProduct();
        this.goBack();
      })
      .catch(this.handleError);
  }

  goBack(){
    this.router.navigate(['/products']);
  }

  private initProduct(){
    this.product = <IProduct> {};
  }

  private handleError(){
    this.errorMessage = "Error occurred.";
  }
}
