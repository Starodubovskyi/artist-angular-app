import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {BlockConfigEditingService} from "../../block-config-editing.service";

@Component({
  selector: 'app-contact-v1-config',
  templateUrl: './contact-v1-config.component.html',
  styleUrls: ['./contact-v1-config.component.css']
})
export class ContactV1ConfigComponent implements OnInit, BlockConfigComponent {

  data: any = {}
  static config: any = {
    title: 'Contact Us',
    titleContent: 'Contact Us',
    subtitle: 'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.',
    button_text: 'Button',
    instagram_contact: 'http://instagram.com',
    facebook_contact: 'http://facebook.com',
    twitter_contact: 'http://twitter.com',
    email: 'email@email.com',
    address: '49 Smith St.\n' +
      'Saint Cloud, MN 56301'
  };
  form: FormGroup = ContactV1ConfigComponent.config.form;

  constructor(private BlockConfigEditingService: BlockConfigEditingService) {
  }

  ngOnInit(): void {


    this.form = new FormGroup({
      title: new FormControl(this.data.title),
      titleContent: new FormControl(this.data.titleContent),
      subtitle: new FormControl(this.data.subtitle),
      button_text: new FormControl(this.data.button_text),
      address: new FormControl(this.data.address),
      email: new FormControl(this.data.email),
      instagram_contact: new FormControl(this.data.instagram_contact),
      facebook_contact: new FormControl(this.data.facebook_contact),
      twitter_contact: new FormControl(this.data.twitter_contact),
    });

    this.form.valueChanges.subscribe((val) => {
      this.BlockConfigEditingService.configObservable.next({
        ...val,
        id: this.data.id,
      });
    });

  }


}
