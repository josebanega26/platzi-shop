import { Component , OnInit  } from '@angular/core';
import { ProductService } from './core/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService){}
  // @Input
  title = 'platzi-shop';
  
  ngOnInit() {
    this.productService.fetchProducts()
  }
}
