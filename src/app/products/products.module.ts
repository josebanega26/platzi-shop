import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './components/products/products.component'
import {ProductDetailComponent} from './components/product-detail/product-detail.component'
import {ProductsListComponent} from './components/products-list/products-list.component'
import {ProductsRoutingModule} from './products-routing.module'
import {MaterialModule} from '../material/material.module'
@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
