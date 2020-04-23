import { Component , OnInit  } from '@angular/core';
import {Product} from './products/products.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // @Input
  title = 'platzi-shop';
  
  ngOnInit() {
  }
}
