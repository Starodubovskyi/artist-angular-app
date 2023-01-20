import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";
import {ConfigFile} from "../../base/config-file";

@Component({
  selector: 'app-testimonials-v3-config',
  templateUrl: './testimonials-v3-config.component.html',
  styleUrls: ['./testimonials-v3-config.component.css']
})

export class TestimonialsV3ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Testimonials V3',
    items: [
      {
        title: "HOLDEN CAULFIELD",
        secondaryText: "ui developer",
        content: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
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
        defaultValues:  {
          title: "HOLDEN CAULFIELD",
          secondaryText: "ui developer",
          content: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
        },
        configs: [
          new ConfigInput({
            key: "title",
            label: "Title",
          }),
          new ConfigInput({
            key: "secondaryText",
            label: "Secondary text",
          }),
          new ConfigTextarea({
            key: "content",
            label: "Content"
          }),
          new ConfigFile({
            key: "image",
            value:this.data.image,
            label: "Image"
          }),
        ]
      })
    ];
  }
}
