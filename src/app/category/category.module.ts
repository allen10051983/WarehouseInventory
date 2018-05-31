import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CategoryListComponent } from './category-list.component';
import { CategoryService } from '../services/category.service';
import { CategoryDetailComponent } from './category-detail.component';
import { CategoryNewComponent } from './category-new.component';
import { CategoryEditComponent } from './category-edit.component';

const routes: Routes = [
    { path: 'categories', component: CategoryListComponent },
    { path: 'categories/new', component: CategoryNewComponent },
    {path: "categories/:id", component: CategoryEditComponent}
];

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryDetailComponent,
        CategoryNewComponent,
        CategoryEditComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        CategoryService
    ]
})
export class CategoryModule{}