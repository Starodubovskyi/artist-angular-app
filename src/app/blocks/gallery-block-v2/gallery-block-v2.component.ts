import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-gallery-block-v2',
  templateUrl: './gallery-block-v2.component.html',
  styleUrls: ['./gallery-block-v2.component.css']
})
export class GalleryBlockV2Component{
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
