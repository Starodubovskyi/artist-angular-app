import {Component, OnInit} from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Block} from "../../blocks/block.interface";
import {LoaderService} from "../../loader.service";
import {ThemeSettings} from "../../theme-settings/theme-settings";
import {ThemeSettingsService} from "../../theme-settings/theme-settings.service";
import {HeaderV1Component} from "../../layouts/header/header-v1/header-v1.component";
import {HeaderV2Component} from "../../layouts/header/header-v2/header-v2.component";
import {HeaderV3Component} from "../../layouts/header/header-v3/header-v3.component";
import {HeaderV4Component} from "../../layouts/header/header-v4/header-v4.component";
import {FooterV1Component} from "../../layouts/footer/footer-v1/footer-v1.component";
import {FooterV2Component} from "../../layouts/footer/footer-v2/footer-v2.component";
import {FooterV3Component} from "../../layouts/footer/footer-v3/footer-v3.component";
import {FooterV4Component} from "../../layouts/footer/footer-v4/footer-v4.component";
import {FooterV5Component} from "../../layouts/footer/footer-v5/footer-v5.component";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  blocks: Block[] = [];
  loaded: boolean = false;
  error: boolean = false;

  themeSettings: ThemeSettings | undefined;
  currentHeader: any;
  currentFooter: any;

  constructor(
    private menuService: MenusService,
    private router: Router,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    private themeSettingsService: ThemeSettingsService
  ) {
  }

  ngOnInit(): void {
    this.themeSettingsService.getSettings().subscribe((response) => {
      this.themeSettings = response;
      this.currentHeader = {
        component: this.getHeaderComponent(this.themeSettings.header.variant),
        themeSettings: this.themeSettings
      }

      this.currentFooter = {
        component: this.getFooterComponent(this.themeSettings.footer.variant),
        themeSettings: this.themeSettings
      }
    });

    this.activatedRoute.url.subscribe((urlSegment) => {
      this.fetchCurrentPage();
    })
  }

  getHeaderComponent(variant) {
    switch (variant) {
      case '0':
        return HeaderV1Component;
      case '1':
        return HeaderV2Component;
      case '2':
        return HeaderV3Component;
      case '3':
        return HeaderV4Component;
      default:
        return HeaderV4Component
    }
  }

  getFooterComponent(variant) {
    switch (variant) {
      case '0':
        return FooterV1Component;
      case '1':
        return FooterV2Component;
      case '3':
        return FooterV3Component;
      case '4':
        return FooterV4Component;
      case '5':
        return FooterV5Component;
      default:
        return FooterV5Component
    }
  }

  fetchCurrentPage() {
    this.menuService.getMenuBySlug(this.router.url).subscribe({
      next: (response) => {
        this.blocks = response.blocks;
      },
      error: () => {
        this.error = true;
      },
      complete: () => {
        this.loaded = true;
      }
    });
  }

}
