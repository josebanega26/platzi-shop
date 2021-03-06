import { Injectable } from '@angular/core';
import { Product } from '../products/products.model';
import { HttpClient } from '@angular/common/http';

const API_URL ='http://platzi-store.herokuapp.com/products'
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [
    // {
    //   id: '1',
    //   image: 'assets/images/camiseta.png',
    //   title: 'Camiseta',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '2',
    //   image: 'assets/images/hoodie.png',
    //   title: 'Hoodie',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '3',
    //   image: 'assets/images/mug.png',
    //   title: 'Mug',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '4',
    //   image: 'assets/images/pin.png',
    //   title: 'Pin',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '5',
    //   image: 'assets/images/stickers1.png',
    //   title: 'Stickers',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '6',
    //   image: 'assets/images/stickers2.png',
    //   title: 'Stickers',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
  ];
  constructor(private http: HttpClient) { }

  fetchProducts(){
    this.http.get<Product[]>(API_URL).subscribe(products =>{
      this.products= products;
      console.log('products', products)
    })
  }

  getProducts(){
    return this.products.slice()
  }

  getProductsById(id: number){
    return this.products[id]
  }
}
