import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './page/page.component';
import {ClientRoutingModule} from "./client-routing.module";
import {BlockRendererModule} from "../block-renderer/block-renderer.module";
import {LayoutsModule} from "../layouts/layouts.module";
import { LayoutRenderDirective } from './page/layout-render.directive';
import { BiographyComponent } from './biography/biography.component';
import { LayoutComponent } from './layout/layout.component';
import { OperasComponent } from './operas/operas.component';
import { OperaComponent } from './opera/opera.component';


@NgModule({
  declarations: [
    PageComponent,
    LayoutRenderDirective,
    BiographyComponent,
    LayoutComponent,
    OperasComponent,
    OperaComponent
  ],
    imports: [
        CommonModule,
        BlockRendererModule,
        ClientRoutingModule,
        LayoutsModule
    ]
})
export class ClientModule {
}
