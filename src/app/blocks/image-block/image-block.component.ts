import {Component, OnInit} from '@angular/core';
import {BlockComponent} from "../block.interface";

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.css']
})
export class ImageBlockComponent implements OnInit, BlockComponent {

  data: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
