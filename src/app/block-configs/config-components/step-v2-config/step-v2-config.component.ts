import { Component } from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigFile} from "../../base/config-file";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-step-v2-config',
  templateUrl: './step-v2-config.component.html',
  styleUrls: ['./step-v2-config.component.css']
})
export class StepV2ConfigComponent{
  static config: any = {
    title: 'Step V2',
    items: [
      {
        number:'1',
        title: "STEP 1",
        content: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.',
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
      new ConfigFile({
        key: "image",
        label: "Image"
      }),
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          number:'1',
          title: "STEP 1",
          content: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.',
        },
        configs: [
          new ConfigInput({
            key: "number",
            label: "Number",
          }),
          new ConfigInput({
            key: "title",
            label: "Title",
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
