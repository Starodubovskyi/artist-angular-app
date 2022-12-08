import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlocksContainerComponent} from './blocks-container/blocks-container.component';
import {BlocksModule} from "../blocks/blocks.module";
import { BlockItemRenderDirective } from './block-item-render.directive';

@NgModule({
  declarations: [
    BlocksContainerComponent,
    BlockItemRenderDirective
  ],
  imports: [
    CommonModule,
    BlocksModule
  ],
  exports: [
    BlocksContainerComponent,
  ]
})
export class BlockRendererModule {
}
