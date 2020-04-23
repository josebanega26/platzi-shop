import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsComponent } from './products/products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import {FooterComponent} from './footer/footer.component'
import {HeaderComponent} from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsComponent,
    ContactComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
