import { Component } from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigFile} from "../../base/config-file";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-team-v2-config',
  templateUrl: './team-v2-config.component.html',
  styleUrls: ['./team-v2-config.component.css']
})

export class TeamV2ConfigComponent {
  static config: any = {
    title: 'TEAM V2',
    titleContent: 'Team V2',
    content:"Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
    items: [
      {
        title: 'Holden Caulfield',
        subTitle: 'UI Designer',
        content:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
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
          subTitle: 'UI Designer',
          content:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
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
          new ConfigTextarea({
            key: "content",
            label: 'Content',
            value: this.data.content
          }),
        ]
      })
    ];
  }
}
