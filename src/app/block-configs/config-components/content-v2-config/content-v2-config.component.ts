import { Component, OnInit } from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-content-v2-config',
  templateUrl: './content-v2-config.component.html',
  styleUrls: ['./content-v2-config.component.css']
})
export class ContentV2ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Content V2',
    titleContent: 'Pitchfork Kickstarter Taxidermy',
    content:'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.',

    items: [
      {
        title: "The Catalyzer",
        secondaryText: "SUBTITLE",
        content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
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
        label: 'TitleContent',
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
          title: "The Catalyzer",
          secondaryText: "SUBTITLE",
          content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        },

        configs: [
          new ConfigInput({
            key: "title",
            label: "Title",
          }),
          new ConfigInput({
            key: "secondaryText",
            label: "SecondaryText",
          }),
          new ConfigTextarea({
            key: "content",
            label: "Content"
          }),
        ]
      })
    ];
  }
}
