import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-blog-block-v3',
  templateUrl: './blog-block-v3.component.html',
  styleUrls: ['./blog-block-v3.component.css']
})
export class BlogBlockV3Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
