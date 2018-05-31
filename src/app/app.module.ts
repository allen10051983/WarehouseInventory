import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';

const routes: Routes = [ {path:'',redirectTo:'/products',pathMatch:'full'}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CategoryModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
