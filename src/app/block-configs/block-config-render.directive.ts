import {Directive, Input, ViewContainerRef} from '@angular/core';
import {Block} from "../blocks/block.interface";
import {BlockConfig, BlockConfigComponent, BlockDetails} from "./block-config.interface";


@Directive({
  selector: '[appBlockConfigRender]'
})
export class BlockConfigRenderDirective {

  constructor(private viewContainer: ViewContainerRef) {
  }

  @Input('appBlockConfigRender') set render(blockDetails: BlockDetails) {
    this.viewContainer.clear();

    const blockConfigRef = this.viewContainer.createComponent<BlockConfigComponent>(blockDetails.config.component)

    const {component, ...blockConfigData} = blockDetails.config;

    blockConfigRef.instance.data = {...blockConfigData, ...blockDetails.block};
  }
}
