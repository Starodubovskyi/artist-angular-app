import { Component } from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigFile} from "../../base/config-file";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-step-v1-config',
  templateUrl: './step-v1-config.component.html',
  styleUrls: ['./step-v1-config.component.css']
})
export class StepV1ConfigComponent{
  static config: any = {
    title: 'Step V1',
    items: [
      {
        title: "STEP 2",
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
        value:this.data.image,
        label: "Image"
      }),
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          title: "STEP 1",
          content: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.',
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
        ]
      })
    ];
  }
}
