import {Component, Input} from '@angular/core';
import {MenuItem, ThemeSettings} from "../../../theme-settings/theme-settings";
import {FooterMenuService} from "../footer-menu.service";

@Component({
  selector: 'app-footer-v3',
  templateUrl: './footer-v3.component.html',
  styleUrls: ['./footer-v3.component.css']
})
export class FooterV3Component {
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
