import {Component, Input} from '@angular/core';
import {ThemeSettings} from "../../../theme-settings/theme-settings";

@Component({
  selector: 'app-header-v5',
  templateUrl: './header-v5.component.html',
  styleUrls: ['./header-v5.component.css']
})
export class HeaderV5Component {
  @Input('themeSettings') themeSettings: ThemeSettings | undefined;
}
