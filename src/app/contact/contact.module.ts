import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './components/contact.component'
import {ContactRoutingModule} from './contact-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
