import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './page/page.component';
import {ClientRoutingModule} from "./client-routing.module";
import {BlockRendererModule} from "../block-renderer/block-renderer.module";
import {LayoutsModule} from "../layouts/layouts.module";


@NgModule({
  declarations: [
    PageComponent
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
