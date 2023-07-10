import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-social-block',
  templateUrl: './social-block.component.html',
  styleUrls: ['./social-block.component.css']
})
export class SocialBlockComponent {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
