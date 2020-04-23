import { NgModule } from '@angular/core';
import { Routes, RouterModule , PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule).catch(err => console.error(err)) 
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule).catch(err => console.error(err))
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule).catch(err => console.error(err))
  },
 
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule).catch(err =>console.error(err))
  },
   {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
