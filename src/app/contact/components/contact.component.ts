import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailField: FormControl = new FormControl(
    'test@gmail.com',[Validators.minLength(10), Validators.required, Validators.maxLength(15)]);
  constructor() { }

  ngOnInit(): void {
    this.emailField.valueChanges.subscribe(
      value => console.log(value)
    )
  }

}
