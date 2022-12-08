import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-content-block-v6',
  templateUrl: './content-block-v6.component.html',
  styleUrls: ['./content-block-v6.component.css']
})
export class ContentBlockV6Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
