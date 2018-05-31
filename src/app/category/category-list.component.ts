import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
    templateUrl: "./category-list.component.html"
})
export class CategoryListComponent implements OnInit{
    pageTitle: string = "Category List";
    categories: ICategory[];
    selectedCategory: ICategory;

    constructor(private categoryService: CategoryService){
    }

    ngOnInit(){
        this.categoryService.getCategories().then(categories => this.categories = categories);
    }

    selectCategory(category: ICategory){
        this.selectedCategory = category;
    }

    delete(category: ICategory): void {
        this.categoryService
      .deleteCategory(category)
      .then(() => {
        this.categories = this.categories.filter(p => p !== category);
        if (this.selectedCategory === category) { this.selectedCategory = null; }
      });
    
}
}