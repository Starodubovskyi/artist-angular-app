import { Component } from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigFile} from "../../base/config-file";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-team-v1-config',
  templateUrl: './team-v1-config.component.html',
  styleUrls: ['./team-v1-config.component.css']
})

export class TeamV1ConfigComponent {
  static config: any = {
    title: 'Team V1',
    titleContent: 'Team V1',
    content:"Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
    items: [
      {
        title: 'Holden Caulfield',
        subTitle: 'UI Designer'
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
        label: 'Title Block',
        value: this.data.titleBlock
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
          title: 'Holden Caulfield',
          subTitle: 'UI Designer'
        },
        configs: [
          new ConfigFile({
            key: "image",
            label: "Image"
          }),
          new ConfigInput({
            key: "title",
            label: 'Title',
            value: this.data.title
          }),
          new ConfigInput({
            key: "subTitle",
            label: 'subTitle',
            value: this.data.subTitle
          }),
        ]
      })
    ];
  }
}
