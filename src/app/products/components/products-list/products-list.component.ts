import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../products.model';
import { Router  } from '@angular/router';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Output()addCart: EventEmitter<any> = new EventEmitter(null);
  constructor(private route: Router) { }
 

  ngOnInit(): void {
  }

  goToDetail(id: number){
    this.route.navigate(['products',id])
  }

  onBuy(index: number) {
    this.addCart.emit(index);
  }
}
