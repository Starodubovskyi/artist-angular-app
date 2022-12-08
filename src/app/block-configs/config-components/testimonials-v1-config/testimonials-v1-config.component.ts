import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";
import {ConfigBase} from "../../base/config-base";
import {ConfigInput} from "../../base/config-input";
import {ConfigItems} from "../../base/config-items";
import {ConfigTextarea} from "../../base/config-textarea";

@Component({
  selector: 'app-testimonials-v1-config',
  templateUrl: './testimonials-v1-config.component.html',
  styleUrls: ['./testimonials-v1-config.component.css']
})

export class TestimonialsV1ConfigComponent implements OnInit, BlockConfigComponent {
  static config: any = {
    title: 'Testimonials V1',
    titleContent:'Testimonials V1',
    items: [
      {
        title: "Title",
        secondaryText: "ui developer",
        content: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
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
      new ConfigInput({
        key: "titleContent",
        label: 'Title Content',
        value: this.data.titleContent
      }),
      new ConfigItems({
        key: "items",
        value: this.data.items,
        defaultValues:  {
          title: "Title",
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
          })
        ]
      })
    ];
  }
}
