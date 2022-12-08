import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-blog-block-v1',
  templateUrl: './blog-block-v1.component.html',
  styleUrls: ['./blog-block-v1.component.css']
})
export class BlogBlockV1Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
