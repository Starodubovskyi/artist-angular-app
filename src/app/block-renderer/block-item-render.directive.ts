import {Directive, Injector, Input, ViewContainerRef} from '@angular/core';
import {Block, BlockComponent} from "../blocks/block.interface";

@Directive({
  selector: '[appBlockItemRender]'
})
export class BlockItemRenderDirective {

  constructor(private viewContainer: ViewContainerRef) {
  }

  @Input('appBlockItemRender') set render(block: Block) {
    this.viewContainer.clear();

    const blockRef = this.viewContainer.createComponent<BlockComponent>(block.component);

    const {component, ...blockData} = block;

    blockRef.instance.data = blockData;
  }

}
