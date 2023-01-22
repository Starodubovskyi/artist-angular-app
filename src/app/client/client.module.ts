import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './page/page.component';
import {ClientRoutingModule} from "./client-routing.module";
import {BlockRendererModule} from "../block-renderer/block-renderer.module";
import {LayoutsModule} from "../layouts/layouts.module";
import { LayoutRenderDirective } from './page/layout-render.directive';


@NgModule({
  declarations: [
    PageComponent,
    LayoutRenderDirective
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
