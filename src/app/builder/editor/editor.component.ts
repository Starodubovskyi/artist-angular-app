import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Block} from "../../blocks/block.interface";
import {BlockTypes} from "../../blocks/block-types";
import {nanoid} from "nanoid";
import {BlockConfigsMappingService} from "../../block-configs/block-configs-mapping.service";
import {BlockConfigEditingService} from "../../block-configs/block-config-editing.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  @Input('blocks') initialBlocks: Block[] = [];
  @Input('pageTitle') pageTitle: string = '';
  @Input('pageId') pageId: string = '';
  @Input('singleBlockMode') singleBlockMode: boolean = false;
  @Output('save') saveEmitter = new EventEmitter();
  @Output('onBack') backEmitter = new EventEmitter();

  blocks: Block[] = [];

  private configWatcher: any;
  private blockRemoveWatcher: any;
  private blockSortWatcher: any;

  constructor(private blockConfigsMappingService: BlockConfigsMappingService, private blocksConfigEditingService: BlockConfigEditingService) {
  }

  ngOnInit(): void {
    this.blocks = this.initialBlocks;

    this.configWatcher = this.blocksConfigEditingService.configWatcher.subscribe((config) => {
      this.blocks = this.blocks.map((block) => {
        if (!config || block.id !== config.id) {
          return block;
        }

        return {
          ...block,
          ...config
        }
      });
    });

    this.blockRemoveWatcher = this.blocksConfigEditingService.blockRemoveWatcher.subscribe((blockId) => {
      this.blocks = this.blocks.filter((block) => block.id !== blockId);
    });

    this.blockSortWatcher = this.blocksConfigEditingService.blockSortWatcher.subscribe((sortedBlocks) => {
      if (sortedBlocks) {
        this.blocks = sortedBlocks;
      }
    });
  }

  ngOnDestroy() {
    this.blockRemoveWatcher.unsubscribe();
    this.blockSortWatcher.unsubscribe();
    this.configWatcher.unsubscribe();
  }

  addBlock(type: BlockTypes) {
    if (this.singleBlockMode && this.blocks.length) {
      return null;
    }

    this.blocks = [...this.blocks, {
      id: nanoid(),
      type,
      title: `Block ${this.blocks.length + 1}`,
      ...this.blockConfigsMappingService.getConfig(type)
    }];
  }

  savePage() {
    this.saveEmitter.emit(this.blocks);
  }

  goBack() {
    this.backEmitter.emit();
  }
}
