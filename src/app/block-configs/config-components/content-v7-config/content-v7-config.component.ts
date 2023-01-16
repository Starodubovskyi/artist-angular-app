import { Component, OnInit } from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-content-v7-config',
  templateUrl: './content-v7-config.component.html',
  styleUrls: ['./content-v7-config.component.css']
})
export class ContentV7ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Content V7',
    titleContent: 'Space The Final Frontier',
    content:'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.',
    items: [
      {
        contentItem: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
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
          contentItem: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        },
        configs: [
          new ConfigTextarea({
            key: "contentItem",
            label: "Content Item",
            value: this.data.content
          }),
        ]
      })
    ];
  }
}
