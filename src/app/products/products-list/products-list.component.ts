import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../products.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Output()addCart: EventEmitter<any> = new EventEmitter(null);
  constructor() { }

  ngOnInit(): void {
  }

  onBuy(index: number) {
    this.addCart.emit(index);
  }
}
