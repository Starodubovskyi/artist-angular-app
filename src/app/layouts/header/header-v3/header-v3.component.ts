import {Component, Input} from '@angular/core';
import {ThemeSettings} from "../../../theme-settings/theme-settings";

@Component({
  selector: 'app-header-v3',
  templateUrl: './header-v3.component.html',
  styleUrls: ['./header-v3.component.css']
})
export class HeaderV3Component {
  @Input('themeSettings') themeSettings: ThemeSettings | undefined;
}
