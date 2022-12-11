import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-step-block-v1',
  templateUrl: './step-block-v1.component.html',
  styleUrls: ['./step-block-v1.component.css']
})
export class StepBlockV1Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
