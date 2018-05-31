import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from '../models/product';
import { ICategory } from '../models/category';

import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  product: IProduct;
  categories: ICategory[];

  errorMessage: string;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    Promise.all([this.categoryService.getCategories(), this.productService.GetProductById(id)]).then(results => {
      let categories = results[0];
      let product = results[1];
      this.categories = categories;
      this.product = product;
    });
  }

  updateProduct(product: IProduct) {
    this.productService.SaveProduct(product).then(() => {
      this.goBack();
    })
  }

  byId(modelVal: ICategory, elVal: ICategory): boolean {
    return modelVal && elVal && modelVal.id === elVal.id;
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
