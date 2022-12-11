import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-feature-block-v3',
  templateUrl: './feature-block-v3.component.html',
  styleUrls: ['./feature-block-v3.component.css']
})
export class FeatureBlockV3Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
