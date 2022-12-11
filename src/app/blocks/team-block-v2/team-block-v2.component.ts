import { Component } from '@angular/core';
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-team-block-v2',
  templateUrl: './team-block-v2.component.html',
  styleUrls: ['./team-block-v2.component.css']
})
export class TeamBlockV2Component {
  data: any = {};

  constructor(private mediaService: MediaService) {
  }
}
