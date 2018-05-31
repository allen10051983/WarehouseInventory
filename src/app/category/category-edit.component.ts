import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../models/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html'
 
})
export class CategoryEditComponent implements OnInit {

  category: ICategory;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategoryById(id)
      .then(category => this.category = category);
  }

  updateCategory(category: ICategory){
    this.categoryService.updateCategory(category)
      .then(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/categories']);
  }
}
