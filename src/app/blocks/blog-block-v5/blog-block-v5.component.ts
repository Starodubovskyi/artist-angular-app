import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-blog-block-v5',
  templateUrl: './blog-block-v5.component.html',
  styleUrls: ['./blog-block-v5.component.css']
})
export class BlogBlockV5Component  {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
