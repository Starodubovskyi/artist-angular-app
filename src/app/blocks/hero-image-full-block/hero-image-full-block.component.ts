import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";


@Component({
  selector: 'app-hero-image-full-block',
  templateUrl: './hero-image-full-block.component.html',
  styleUrls: ['./hero-image-full-block.component.css']
})
export class HeroImageFullBlockComponent {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
