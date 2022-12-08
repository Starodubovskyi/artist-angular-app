import {Component} from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-hero-block-v2',
  templateUrl: './hero-block-v2.component.html',
  styleUrls: ['./hero-block-v2.component.css']
})
export class HeroBlockV2Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
