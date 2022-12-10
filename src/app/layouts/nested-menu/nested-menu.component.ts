import {Component, Input} from '@angular/core';
import {ThemeSettingsService} from "../../theme-settings/theme-settings.service";

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.css']
})
export class NestedMenuComponent {

  @Input() menus: any[] = [];

  constructor(private themeSettings: ThemeSettingsService) {
  }

  ngOnInit() {

  }
}
