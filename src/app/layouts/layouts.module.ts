import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterV1Component } from './footer/footer-v1/footer-v1.component';
import { FooterV2Component } from './footer/footer-v2/footer-v2.component';
import { FooterV3Component } from './footer/footer-v3/footer-v3.component';
import { FooterV4Component } from './footer/footer-v4/footer-v4.component';
import { FooterV5Component } from './footer/footer-v5/footer-v5.component';
import { HeaderV1Component } from './header/header-v1/header-v1.component';
import { HeaderV2Component } from './header/header-v2/header-v2.component';
import { HeaderV3Component } from './header/header-v3/header-v3.component';
import { HeaderV4Component } from './header/header-v4/header-v4.component';
import { HeaderV5Component } from './header/header-v5/header-v5.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        FooterV1Component,
        FooterV2Component,
        FooterV3Component,
        FooterV4Component,
        FooterV5Component,
        HeaderV1Component,
        HeaderV2Component,
        HeaderV3Component,
        HeaderV4Component,
        HeaderV5Component
    ],
  exports: [
    FooterV1Component,
    FooterV3Component,
    FooterV4Component,
    FooterV5Component,
    FooterV2Component,
    HeaderV1Component,
    HeaderV2Component,
    HeaderV3Component,
    HeaderV4Component,
    HeaderV5Component
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class LayoutsModule { }
