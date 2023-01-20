import {Component, Input} from '@angular/core';
import {ThemeSettings} from "../../../theme-settings/theme-settings";

@Component({
  selector: 'app-header-v4',
  templateUrl: './header-v4.component.html',
  styleUrls: ['./header-v4.component.css']
})
export class HeaderV4Component {
  @Input('themeSettings') themeSettings: ThemeSettings | undefined;
}
