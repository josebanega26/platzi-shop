import { Routes, RouterModule } from '@angular/router';
import { NgModule , } from '@angular/core';
import { HomeComponent } from './container/home.component';

export const routes: Routes = [{
    path:'',
    component:HomeComponent
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule{

}