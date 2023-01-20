import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigInput} from "../../base/config-input";
import {ConfigFile} from "../../base/config-file";
import {ConfigBase} from "../../base/config-base";

@Component({
  selector: 'app-image-block-config',
  templateUrl: './image-block-config.component.html',
  styleUrls: ['./image-block-config.component.css']
})
export class ImageBlockConfigComponent implements OnInit, BlockConfigComponent {

  data: any = {};

  static config: any = {
    title: 'Image caption'
  };
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
    ];
  }

}
