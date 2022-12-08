import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BlocksMappingService} from "../../blocks/blocks-mapping.service";
import {Block} from "../../blocks/block.interface";
import {BlockConfigEditingService} from "../../block-configs/block-config-editing.service";

@Component({
  selector: 'app-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.css']
})
export class BlocksContainerComponent implements OnInit, OnChanges {

  @Input('blocks') initialBlocks: Block[] = [];

  blocks: Block[] = [];

  constructor(private blocksMappingService: BlocksMappingService, private blocksConfigEditingService: BlockConfigEditingService) {
  }

  ngOnInit(): void {
    this.blocks = this.blocksMappingService.mapBlocksToComponents(this.initialBlocks);

    this.blocksConfigEditingService.blockSortWatcher.subscribe((sortedBlocks) => {
      if (sortedBlocks) {
        this.blocks = this.blocksMappingService.mapBlocksToComponents(sortedBlocks);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.blocks = this.blocksMappingService.mapBlocksToComponents(changes['initialBlocks'].currentValue);
  }

}
