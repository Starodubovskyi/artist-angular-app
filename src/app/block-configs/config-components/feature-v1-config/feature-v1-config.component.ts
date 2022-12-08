import { Component} from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";


@Component({
  selector: 'app-feature-v1-config',
  templateUrl: './feature-v1-config.component.html',
  styleUrls: ['./feature-v1-config.component.css']
})
export class FeatureV1ConfigComponent {
  static config: any = {
    title: 'Feature V1',
    titleContent: 'Pitchfork Kickstarter Taxidermy',
    items: [
      {
        title:'Shooting Stars',
        content:'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.',
        textLink: 'First Link',
        link: '/first-link'
      }
    ]
  };
  data: any = {}
  configs: ConfigBase<any>[] = [];

  ngOnInit(): void {
    this.configs = [
      new ConfigInput({
        key: "title",
        label: 'Title',
        value: this.data.title
      }),
      new ConfigInput({
        key: "titleContent",
        label: 'Title Content',
        value: this.data.titleContent
      }),

      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          title:"Shooting Stars",
          content:'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.',
          textLink: 'First Link',
          link: '/first-link'
        },
        configs: [
          new ConfigInput({
            key: "title",
            label: "Title",
            value: this.data.title
          }),
          new ConfigTextarea({
            key: "content",
            label: 'Content',
            value: this.data.content
          }),
          new ConfigInput({
            key: "title",
            label: "Title",
            value: this.data.title
          }),
          new ConfigInput({
            key: "textLink",
            label: "Text Link",
            value: this.data.textLink
          }),
          new ConfigInput({
            key: "link",
            label: "Link",
            value: this.data.link
          }),
        ]
      })
    ];
  }
}
