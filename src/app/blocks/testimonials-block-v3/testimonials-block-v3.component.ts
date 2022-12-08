import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-testimonials-block-v3',
  templateUrl: './testimonials-block-v3.component.html',
  styleUrls: ['./testimonials-block-v3.component.css']
})
export class TestimonialsBlockV3Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }

  getImagePath(path: string) {
    return this.mediaService.getImagePath(path);
  }
}
