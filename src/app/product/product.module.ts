import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { ProductService } from '../services/product.service';
import { ProductListComponent } from './product-list.component';
import { ProductNewComponent } from './product-new.component';
import { ProductEditComponent } from './product-edit.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductNewComponent },
  { path: 'products/:id', component: ProductEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductListComponent, ProductNewComponent, ProductEditComponent],
  providers: [ProductService]
})
export class ProductModule { }
