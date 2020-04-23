import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
const routes: Routes = [{
  path:'',
  component: NavComponent
},
{
  path:'create',
  component: ProductFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
