import {Component} from '@angular/core';
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-gallery-v2-config',
  templateUrl: './gallery-v2-config.component.html',
  styleUrls: ['./gallery-v2-config.component.css']
})
export class GalleryV2ConfigComponent{

  static config: any = {
    title: 'Gallery V2',
    titleTopImage:"Shooting Stars",
    contentTopImage:"Skateboard +1 mustache fixie paleo lumbersexual.",
    textLinkTopImage:"Learn More",
    linkTopImage:"/learn-more",
    titleLeftImage:"Shooting Stars",
    contentLeftImage:"Skateboard +1 mustache fixie paleo lumbersexual.",
    textLinkLeftImage:"Learn More",
    linkLeftImage:"/learn-more",
    titleRightImage:"Shooting Stars",
    contentRightImage:"Skateboard +1 mustache fixie paleo lumbersexual.",
    textLinkRightImage:"Learn More",
    linkRightImage:"/learn-more"
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
        key: "topImage",
        label: "Top Image"
      }),
      new ConfigInput({
        key: "titleTopImage",
        label: "Title top image",
        value: this.data.titleTopImage
      }),
      new ConfigTextarea({
        key: "contentTopImage",
        label: 'Content top image',
        value: this.data.contentTopImage
      }),
      new ConfigInput({
        key: "textLinkTopImage",
        label: "Text link top image",
        value: this.data.textLinkTopImage
      }),
      new ConfigInput({
        key: "linkTopImage",
        label: "Link top image",
        value: this.data.linkTopImage
      }),
      new ConfigFile({
        key: "leftImage",
        label: "Left Image"
      }),
      new ConfigInput({
        key: "titleLeftImage",
        label: "Title left image",
        value: this.data.titleLeftImage
      }),
      new ConfigTextarea({
        key: "contentLeftImage",
        label: 'Content left image',
        value: this.data.contentLeftImage
      }),
      new ConfigInput({
        key: "textLinkLeftImage",
        label: "Text link left image",
        value: this.data.textLinkLeftImage
      }),
      new ConfigInput({
        key: "linkLeftImage",
        label: "Link left image",
        value: this.data.linkLeftImage
      }),
      new ConfigFile({
        key: "rightImage",
        label: "Right Image"
      }),
      new ConfigInput({
        key: "titleRightImage",
        label: "Title right image",
        value: this.data.titleRightImage
      }),
      new ConfigTextarea({
        key: "contentRightImage",
        label: 'Content right image',
        value: this.data.contentRightImage
      }),
      new ConfigInput({
        key: "textLinkRightImage",
        label: "Text link right image",
        value: this.data.textLinkRightImage
      }),
      new ConfigInput({
        key: "linkRightImage",
        label: "Link right image",
        value: this.data.linkRightImage
      }),
    ];
  }
}
