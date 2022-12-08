import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-content-v4-config',
  templateUrl: './content-v4-config.component.html',
  styleUrls: ['./content-v4-config.component.css']
})
export class ContentV4ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Content V4',
    titleContent: 'Pitchfork Kickstarter Taxidermy',
    content: 'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.',
    textLink: 'Learn More',
    link: '/learn-more'
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
        key: "textLink",
        label: "Text Link",
        value: this.data.textLink
      }),
      new ConfigInput({
        key: "link",
        label: "Link",
        value: this.data.link
      }),
    ];
  }
}
