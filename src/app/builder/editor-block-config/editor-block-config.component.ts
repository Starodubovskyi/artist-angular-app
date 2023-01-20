import {Component, Input, OnInit} from '@angular/core';
import {Block} from "../../blocks/block.interface";
import {BlockConfig} from "../../block-configs/block-config.interface";
import {BlockConfigEditingService} from "../../block-configs/block-config-editing.service";

@Component({
  selector: 'app-editor-block-config',
  templateUrl: './editor-block-config.component.html',
  styleUrls: ['./editor-block-config.component.css']
})
export class EditorBlockConfigComponent implements OnInit {

  @Input('block') currentBlock: Block | null = null;
  @Input('blockConfig') currentBlockConfig: BlockConfig | null = null;

  currentBlockDetails: any;

  constructor(private blockConfigEditingService: BlockConfigEditingService) {
  }

  ngOnInit(): void {
    this.currentBlockDetails = {
      config: this.currentBlockConfig,
      block: this.currentBlock
    }
  }
  removeBlock() {
    this.blockConfigEditingService.blockRemoveObservable.next(this.currentBlock?.id);
  }
}
