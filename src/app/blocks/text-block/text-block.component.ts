import {Component, OnInit} from '@angular/core';
import {BlockComponent} from "../block.interface";

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit, BlockComponent {

  data: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
