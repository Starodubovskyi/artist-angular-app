import { Component, OnInit } from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-content-v6-config',
  templateUrl: './content-v6-config.component.html',
  styleUrls: ['./content-v6-config.component.css']
})
export class ContentV6ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Content V6',
    titleContent: 'Space The Final Frontier',
    content:'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.',
    items: [
      {
        image:'',
        title: "The Catalyzer",
        content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        linkText: 'Learn More',
        link: '/learn-more',
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
          image:'',
          title: "The Catalyzer",
          content: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
          linkText: 'Learn More',
          link: '/learn-more',
        },
        configs: [
          new ConfigFile({
            key: "image",
            label: "Image",
            value: this.data.image
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
          new ConfigInput({
            key: "linkText",
            label: "Text button link",
            value: this.data.linkText
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
