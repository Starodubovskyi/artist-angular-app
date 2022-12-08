import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-hero-block-v1',
  templateUrl: './hero-block-v1.component.html',
  styleUrls: ['./hero-block-v1.component.css']
})
export class HeroBlockV1Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
