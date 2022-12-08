import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-content-v3-config',
  templateUrl: './content-v3-config.component.html',
  styleUrls: ['./content-v3-config.component.css']
})
export class ContentV3ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Content V3',
    titleContent: 'Pitchfork Kickstarter Taxidermy',
    content: 'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.',
    secondaryText: "CATEGORIES",
    items: [
      {
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
      new ConfigTextarea({
        key: "content",
        label: 'Content',
        value: this.data.content
      }),
      new ConfigInput({
        key: "secondaryText",
        label: 'Secondary Text',
        value: this.data.secondaryText
      }),
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          textLink: 'First Link',
          link: '/first-link'
        },
        configs: [
          new ConfigInput({
            key: "textLink",
            label: "Text Link",
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
