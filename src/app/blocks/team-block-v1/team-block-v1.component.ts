import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-team-block-v1',
  templateUrl: './team-block-v1.component.html',
  styleUrls: ['./team-block-v1.component.css']
})
export class TeamBlockV1Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
