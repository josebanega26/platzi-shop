import { Component, OnInit } from '@angular/core';
import {Product} from '../products.model'
import {ProductService} from '../../core/product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[] = [];
  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  

  addCart(index: number) {
    console.log('you click the children', index);
  }
}
