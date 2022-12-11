import {Component, Input} from '@angular/core';
import {MenuItem, ThemeSettings} from "../../../theme-settings/theme-settings";
import {FooterMenuService} from "../footer-menu.service";

@Component({
  selector: 'app-footer-v2',
  templateUrl: './footer-v2.component.html',
  styleUrls: ['./footer-v2.component.css']
})
export class FooterV2Component {
  @Input('themeSettings') themeSettings: ThemeSettings | undefined;

  menu: MenuItem[] = [];

  constructor(private footerMenuService: FooterMenuService) {
  }

  ngOnInit() {
    if (this.themeSettings) {
      this.menu = this.footerMenuService.flattenMenu(this.themeSettings?.footerMenu);
    }
  }
}
