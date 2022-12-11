import {Component} from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-gallery-block-v1',
  templateUrl: './gallery-block-v1.component.html',
  styleUrls: ['./gallery-block-v1.component.css']
})
export class GalleryBlockV1Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
