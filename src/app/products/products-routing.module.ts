import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component'
import {ProductDetailComponent} from './components/product-detail/product-detail.component'
export const routes: Routes = [{
    path:'',
    children:[
        {
            path:'',
            component: ProductsComponent
        },
        {
            path:':id',
            component: ProductDetailComponent
        }
    ]
}]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule{}