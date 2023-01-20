import {Component, Input} from '@angular/core';
import {ThemeSettings} from "../../../theme-settings/theme-settings";

@Component({
  selector: 'app-header-v2',
  templateUrl: './header-v2.component.html',
  styleUrls: ['./header-v2.component.css']
})
export class HeaderV2Component {
  @Input('themeSettings') themeSettings: ThemeSettings | undefined;
}
