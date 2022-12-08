import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-gallery-block-v3',
  templateUrl: './gallery-block-v3.component.html',
  styleUrls: ['./gallery-block-v3.component.css']
})
export class GalleryBlockV3Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
