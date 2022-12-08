import {Component, OnInit} from '@angular/core';
import {BlockConfigComponent} from "../../block-config.interface";

@Component({
  selector: 'app-image-block-config',
  templateUrl: './image-block-config.component.html',
  styleUrls: ['./image-block-config.component.css']
})
export class ImageBlockConfigComponent implements OnInit, BlockConfigComponent {

  data: any = {};

  static config: any = {
    title: 'text from image'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
