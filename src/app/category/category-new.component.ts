import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ICategory } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  templateUrl: './category-new.component.html'
})
export class CategoryNewComponent implements OnInit {
  category: ICategory;
  errorMessage: string;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.initCategory();
  }

  addCategory(category: ICategory){
    this.categoryService.createCategory(category).then(() =>{
      this.initCategory();
      this.goBack();
    })
    .catch(reason=>this.errorMessage = "Error Occurred.");
  }

  goBack(){
    this.router.navigate(['/categories']);
  }

  private initCategory(){
    this.category = <ICategory>{};
  }
}
