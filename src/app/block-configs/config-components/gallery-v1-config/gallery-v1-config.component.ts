import {Component} from '@angular/core';

import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-gallery-v1-config',
  templateUrl: './gallery-v1-config.component.html',
  styleUrls: ['./gallery-v1-config.component.css']
})
export class GalleryV1ConfigComponent{

  static config: any = {
    title: 'Gallery V1',
    titleContent: 'Gallery V1',
    content: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
    items: []
  };

  data: any = {}
  configs: ConfigBase<any>[] = [];

  constructor() {
  }


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
        configs: [
          new ConfigFile({
            key: "leftImage",
            label: "Left Image"
          }),
          new ConfigFile({
            key: "rightImage",
            label: "Right Image"
          }),
          new ConfigFile({
            key: "bigImage",
            label: "Big Image"
          })
        ]
      })
    ];
  }
}
