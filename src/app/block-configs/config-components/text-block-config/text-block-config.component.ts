import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigSwitch} from "../../base/config-switch";

@Component({
  selector: 'app-text-block-config',
  templateUrl: './text-block-config.component.html',
  styleUrls: ['./text-block-config.component.css']
})
export class TextBlockConfigComponent implements OnInit, BlockConfigComponent {

  static config: any = {
    title: 'Sample Text',
    titleContent: 'Sample Text',
    description: 'Lorem description dummy',
    buttonText: 'Read more',
    showButtonIcon: true
  };

  data: any = {};

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
      new ConfigInput({
        key: "titleContent",
        label: 'Title Content',
        value: this.data.titleContent
      }),
      new ConfigTextarea({
        key: "description",
        label: 'Description',
        value: this.data.description
      }),
      new ConfigInput({
        key: "buttonText",
        label: 'Button text',
        value: this.data.buttonText
      }),
      new ConfigSwitch({
        key: "showButtonIcon",
        label: "Show button icon",
        value: this.data.showButtonIcon
      })
    ];
  }

}
