import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-carousel-v1-config',
  templateUrl: './carousel-v1-config.component.html',
  styleUrls: ['./carousel-v1-config.component.css']
})

  export class CarouselV1ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Carousel v1',
    items: [
      {
        titleContent: 'Title',
        content: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
        imageDescription:'Description',
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
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues: {
          titleContent: 'Hero V3',
          content: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
          imageDescription:'Description',
          textButton: 'Button',
          link: '/button'
        },
        configs: [
          new ConfigInput({
            key: "titleContent",
            label: 'Title',
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
