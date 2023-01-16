import {Component} from '@angular/core';
import {NgxTinySliderSettingsInterface} from 'ngx-tiny-slider';

@Component({
  selector: 'app-slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.css']
})
export class SliderBlockComponent {
  tinySliderConfig: NgxTinySliderSettingsInterface = {
    arrowKeys: true,
    autoWidth: true,
    gutter: 10,
    controlsText: ['<', '>']
  };

  ngOnInit() {
  }
}
