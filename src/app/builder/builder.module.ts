import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor/editor.component';
import {BlockRendererModule} from "../block-renderer/block-renderer.module";
import {EditorSidebarComponent} from './editor-sidebar/editor-sidebar.component';
import {EditorBlockConfigComponent} from './editor-block-config/editor-block-config.component';
import {BlockConfigsModule} from "../block-configs/block-configs.module";
import {SortablejsModule} from "ngx-sortablejs";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    EditorComponent,
    EditorSidebarComponent,
    EditorBlockConfigComponent
  ],
  exports: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    SortablejsModule,
    BlockRendererModule,
    BlockConfigsModule,
    RouterLink
  ]
})
export class BuilderModule {
}
