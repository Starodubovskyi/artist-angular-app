import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-hero-block-v3',
  templateUrl: './hero-block-v3.component.html',
  styleUrls: ['./hero-block-v3.component.css']
})
export class HeroBlockV3Component{
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
