import {Component} from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigFile} from "../../base/config-file";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigItems} from "../../base/config-items";

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
    imageDescription:'Description',
    items: [
      {
        textButton: 'Button',
        link: '/button'
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
      new ConfigFile({
        key: "image",
        value:this.data.image,
        label: "Image"
      }),
      new ConfigInput({
        key: "imageDescription",
        label: "Description for the image",
        value: this.data.imageDescription
      }),
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          textButton: 'Button',
          link: '/first-link'
        },
        configs: [
          new ConfigInput({
            key: "textButton",
            label: "Text Link",
            value: this.data.textLink
          }),
          new ConfigInput({
            key: "link",
            label: "Link",
            value: this.data.link
          }),
        ]
      })

    ];
  }
}
