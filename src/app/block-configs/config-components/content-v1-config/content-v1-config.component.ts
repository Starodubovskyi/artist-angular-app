import { Component, OnInit } from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-content-v1-config',
  templateUrl: './content-v1-config.component.html',
  styleUrls: ['./content-v1-config.component.css']
})
export class ContentV1ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Content V1',
    titleContent: 'Content V1',
    secondaryText: 'ROOF PARTY POLAROID',
    content:'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.',

    items: [
      {
        title: "The Catalyzer",
        secondaryText: "CATEGORY",
        content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        linkText: 'Learn More',
        link: '/blog',
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
      new ConfigInput({
        key: "secondaryText",
        label: 'Secondary Text',
        value: this.data.secondaryText
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
          content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
          linkText: 'Learn More',
          link: '/blog',
        },
        configs: [
          new ConfigInput({
            key: "title",
            label: "Title",
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
        ]
      })
    ];
  }
}
