import {Component} from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";



@Component({
  selector: 'app-social-v1-config',
  templateUrl: './social-v1-config.component.html',
  styleUrls: ['./social-v1-config.component.css']
})
export class SocialV1ConfigComponent {
  static config: any = {
    title: 'Social V1',
    facebookLink: 'http://facebook.com',
    instagramLink: 'http://instagram.com',
    linkedInLink:'http://linkedin.com',
    twitterLink: 'http://twitter.com'
  };
  data: any = {}
  configs: ConfigBase<any>[] = [];

  ngOnInit(): void {
    this.configs = [
      new ConfigInput({
        key: "facebookLink",
        label: 'Facebook Link',
        value: this.data.facebookLink
      }),
      new ConfigInput({
        key: "instagramLink",
        label: 'Instagram Link',
        value: this.data.instagramLink
      }),
      new ConfigInput({
        key: "linkedInLink",
        label: 'Instagram Link',
        value: this.data.linkedInLink
      }),
      new ConfigInput({
        key: "twitterLink",
        label: 'Twitter Link',
        value: this.data.twitterLink
      }),
    ];
  }

}
