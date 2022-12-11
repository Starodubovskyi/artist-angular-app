import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-content-block-v5',
  templateUrl: './content-block-v5.component.html',
  styleUrls: ['./content-block-v5.component.css']
})
export class ContentBlockV5Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
