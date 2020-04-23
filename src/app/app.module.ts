import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsComponent } from './products/products/products.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import {FooterComponent} from './footer/footer.component'
import {HeaderComponent} from './header/header.component';
import { BannerComponent } from './banner/banner.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsComponent,
    HomeComponent,
    ContactComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
