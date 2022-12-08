import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-content-v5-config',
  templateUrl: './content-v5-config.component.html',
  styleUrls: ['./content-v5-config.component.css']
})
export class ContentV5ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Content V5',
    name: 'Phoebe Caulfield',
    secondaryText: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    content: 'Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90\'s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.',
    textLink: 'Learn More',
    link: '/learn-more',
  };
  data: any = {}
  configs: ConfigBase<any>[] = [];

  ngOnInit(): void {
    this.configs = [
      new ConfigFile({
        key: "image",
        label: "Image",
        value: this.data.image
      }),
      new ConfigInput({
        key: "title",
        label: 'Title',
        value: this.data.title
      }),
      new ConfigTextarea({
        key: "name",
        label: 'Name',
        value: this.data.name
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
