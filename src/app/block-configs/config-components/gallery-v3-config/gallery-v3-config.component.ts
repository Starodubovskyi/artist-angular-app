import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-gallery-v3-config',
  templateUrl: './gallery-v3-config.component.html',
  styleUrls: ['./gallery-v3-config.component.css']
})
export class GalleryV3ConfigComponent implements OnInit, BlockConfigComponent {

  static config: any = {
    title: 'Gallery V3',
    titleContent:'Gallery V3',
    content: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
    items: [
      {
        subtitle:"THE SUBTITLE",
        title:'Shooting Stars',
        content:'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.',
      }
      ]
  }

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
      new ConfigTextarea({
        key: "content",
        label: 'Content',
        value: this.data.content
      }),
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          subtitle:"THE SUBTITLE",
          title:'Shooting Stars',
          content:'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.',
        },
        configs: [
          new ConfigFile({
            key: "image",
            label: "Image"
          }),
          new ConfigInput({
            key: "subtitle",
            label: "Subtitle",
            value: this.data.subtitle
          }),
          new ConfigInput({
            key: "title",
            label: "Title",
            value: this.data.title
          }),
          new ConfigTextarea({
            key: "content",
            label: "Content",
            value: this.data.content
          }),
        ]
      })
    ];
  }
}
