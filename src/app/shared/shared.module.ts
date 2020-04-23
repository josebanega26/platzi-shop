import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import {MaterialModule} from '../material/material.module'
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule , MaterialModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
