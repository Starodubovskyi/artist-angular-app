import {Component} from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigFile} from "../../base/config-file";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-hero-v2-config',
  templateUrl: './hero-v2-config.component.html',
  styleUrls: ['./hero-v2-config.component.css']
})
export class HeroV2ConfigComponent {
  static config: any = {
    title: 'Hero V2',
    titleContent:'Hero V2',
    content: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
    textButton: 'Button',
    link: '/first-link',
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
        value:this.data.image,
        label: "Image"
      }), new ConfigInput({
        key: "textButton",
        label: "Text Link",
        value: this.data.textButton
      }),
      new ConfigInput({
        key: "link",
        label: "Link",
        value: this.data.link
      }),
    ];
  }
}
