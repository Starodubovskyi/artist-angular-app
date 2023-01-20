import {Component, Input} from '@angular/core';
import {MenuItem, ThemeSettings} from "../../../theme-settings/theme-settings";
import {FooterMenuService} from "../footer-menu.service";

@Component({
  selector: 'app-footer-v5',
  templateUrl: './footer-v5.component.html',
  styleUrls: ['./footer-v5.component.css']
})
export class FooterV5Component {
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
