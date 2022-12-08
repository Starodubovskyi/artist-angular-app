import {Component} from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";

import {ConfigFile} from "../../base/config-file";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-hero-v3-config',
  templateUrl: './hero-v3-config.component.html',
  styleUrls: ['./hero-v3-config.component.css']
})
export class HeroV3ConfigComponent {
  static config: any = {
    title: 'Hero V3',
    titleContent: 'Hero V3',
    content: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
    textRightButton: 'Button',
    linkLeft: '/left-link',
    textLeftButton: 'Button',
    linkRight: '/right-link',
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
      new ConfigFile({
        key: "image",
        label: "Image"
      }), new ConfigInput({
        key: "textRightButton",
        label: "Text Button Tow",
        value: this.data.textRightButton
      }),
      new ConfigInput({
        key: "linkRight",
        label: "Link Button Two",
        value: this.data.linkRight
      }),
      new ConfigInput({
        key: "textLeftButton",
        label: "Text Button One",
        value: this.data.textLeftButton
      }),
      new ConfigInput({
        key: "linkLeft",
        label: "Link Button One",
        value: this.data.linkLeft
      }),

    ];
  }
}
