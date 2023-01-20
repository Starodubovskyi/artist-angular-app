import { Component } from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import { ConfigFile } from '../../base/config-file';
import {ConfigInput} from "../../base/config-input";

@Component({
  selector: 'app-hero-image-full-config',
  templateUrl: './hero-image-full-config.component.html',
  styleUrls: ['./hero-image-full-config.component.css']
})
export class HeroImageFullConfigComponent  {

  static config: any = {
    title: 'Hero Image Full Page',
  }

  data: any = {}
  configs: ConfigBase<any>[] = [];

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
