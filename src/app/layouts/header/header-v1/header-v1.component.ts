import {Component, Input} from '@angular/core';
import {ThemeSettings} from "../../../theme-settings/theme-settings";

@Component({
  selector: 'app-header-v1',
  templateUrl: './header-v1.component.html',
  styleUrls: ['./header-v1.component.css']
})
export class HeaderV1Component {
  @Input('themeSettings') themeSettings: ThemeSettings | undefined;
}
