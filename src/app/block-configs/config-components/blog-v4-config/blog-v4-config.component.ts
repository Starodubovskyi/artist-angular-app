import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-blog-v4-config',
  templateUrl: './blog-v4-config.component.html',
  styleUrls: ['./blog-v4-config.component.css']
})
export class BlogV4ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Blog V4',
    items: [
      {
        title: "The Catalyzer",
        secondaryText: "CATEGORY",
        content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        linkText: 'Learn More',
        link: '/blog',
        date:"12 Jun 2019"
      }
    ]
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
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          title: "The Catalyzer",
          secondaryText: "CATEGORY",
          content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
          linkText: 'Learn More',
          link: '/blog',
          name:"Holden Caulfield",
          attribution:"UI DEVELOPER",
          date:"12 Jun 2019"
        },
        configs: [
          new ConfigInput({
            key: "title",
            label: "Title",
          }),
          new ConfigInput({
            key: "secondaryText",
            label: "Secondary text",
          }),
          new ConfigTextarea({
            key: "content",
            label: "Content"
          }),
          new ConfigInput({
            key: "linkText",
            label: "Text button link",
          }),
          new ConfigInput({
            key: "link",
            label: "Link",
          }),
          new ConfigInput({
            key: "date",
            label: "date",
          }),
        ]
      })
    ];
  }
}
