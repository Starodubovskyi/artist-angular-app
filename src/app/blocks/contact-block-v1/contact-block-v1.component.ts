import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-block-v1',
  templateUrl: './contact-block-v1.component.html',
  styleUrls: ['./contact-block-v1.component.css']
})
export class ContactBlockV1Component implements OnInit {
  data: any = {};
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm() {
    const message= `My name is ${this.name}`
  alert(message)
  }

}
