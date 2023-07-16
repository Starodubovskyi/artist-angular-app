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
import { ExpositionsComponent } from './expositions/expositions.component';
import {QuillViewComponent} from "ngx-quill";
import { ExpositionComponent } from './exposition/exposition.component';
import { AntologieComponent } from './antologie/antologie.component';
import { CataloghiComponent } from './cataloghi/cataloghi.component';
import {BlocksModule} from "../blocks/blocks.module";


@NgModule({
  declarations: [
    PageComponent,
    LayoutRenderDirective,
    BiographyComponent,
    LayoutComponent,
    OperasComponent,
    OperaComponent,
    ExpositionsComponent,
    ExpositionComponent,
    AntologieComponent,
    CataloghiComponent
  ],
    imports: [
        CommonModule,
        BlockRendererModule,
        ClientRoutingModule,
        LayoutsModule,
        QuillViewComponent,
        BlocksModule
    ]
})
export class ClientModule {
}
