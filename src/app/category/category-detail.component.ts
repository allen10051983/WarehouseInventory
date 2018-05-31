import { Component, Input } from '@angular/core';

import { ICategory } from '../models/category';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent {
  @Input() category: ICategory;
}
