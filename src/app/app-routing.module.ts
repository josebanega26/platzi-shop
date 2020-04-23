import { NgModule } from '@angular/core';
import { Routes, RouterModule , PreloadAllModules, PreloadingStrategy } from '@angular/router';
import {ProductsComponent} from './products/products/products.component'
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule).catch(err => console.error(err)) 
  },
  {
    path: 'products',
    children:[
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
