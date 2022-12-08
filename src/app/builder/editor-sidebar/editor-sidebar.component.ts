import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Block} from "../../blocks/block.interface";
import {BlockConfig} from "../../block-configs/block-config.interface";
import {BlockConfigsMappingService} from "../../block-configs/block-configs-mapping.service";
import {BlockTypes} from "../../blocks/block-types";
import {BlockConfigEditingService} from "../../block-configs/block-config-editing.service";

@Component({
  selector: 'app-editor-sidebar',
  templateUrl: './editor-sidebar.component.html',
  styleUrls: ['./editor-sidebar.component.css']
})
export class EditorSidebarComponent implements OnInit {

  @Input() blocks: Block[] = [];
  @Output('addBlock') addBlockEventEmitter = new EventEmitter();

  selectedBlock: Block | null = null;

  selectedBlockConfig: BlockConfig | null = null;

  showDrawer = false;

  sortableOptions = {
    onUpdate: (event: any) => {
      this.blocksConfigEditingService.blockSortObservable.next(this.blocks);
    }
  };

  availableBlocks = [
    {
      type: BlockTypes.TEXT,
      title: `Text block`
    },
    {
      type: BlockTypes.IMAGE,
      title: 'Image block'
    },
    {
      type: BlockTypes.BLOG_V1,
      title: 'Block v1'
    },
    {
      type: BlockTypes.BLOG_V2,
      title: 'Block v2'
    },
    {
      type: BlockTypes.BLOG_V3,
      title: 'Block v3'
    },
    {
      type: BlockTypes.BLOG_V4,
      title: 'Block v4'
    },
    {
      type: BlockTypes.BLOG_V5,
      title: 'Block v5'
    },
    {
      type: BlockTypes.CONTACT_V1,
      title: 'Contact v1'
    }, {
      type: BlockTypes.CONTENT_V1,
      title: 'Content v1'
    }, {
      type: BlockTypes.CONTENT_V2,
      title: 'Content v2'
    }, {
      type: BlockTypes.CONTENT_V3,
      title: 'Content v3'
    }, {
      type: BlockTypes.CONTENT_V4,
      title: 'Content v4'
    }
    , {
      type: BlockTypes.CONTENT_V5,
      title: 'Content v5'
    },
    {
      type: BlockTypes.CONTENT_V6,
      title: 'Content v6'
    },
    {
      type: BlockTypes.FEATURE_V1,
      title: 'Feature V1'
    },
    {
      type: BlockTypes.FEATURE_V2,
      title: 'Feature V2'
    },
    {
      type: BlockTypes.FEATURE_V3,
      title: 'Feature V3'
    },
    {
      type: BlockTypes.FEATURE_V4,
      title: 'Feature V4'
    },
    {
      type: BlockTypes.FEATURE_V5,
      title: 'Feature V5'
    },
    {
      type: BlockTypes.FEATURE_V6,
      title: 'Feature V6'
    },
    {
      type: BlockTypes.GALLERY_V1,
      title: 'Gallery v1'
    },
    {
      type: BlockTypes.GALLERY_V2,
      title: 'Gallery v2'
    },
    {
      type: BlockTypes.GALLERY_V3,
      title: 'Gallery v3'
    },
    {
      type: BlockTypes.HERO_V1,
      title: 'Hero v1'
    },
    {
      type: BlockTypes.HERO_V2,
      title: 'Hero v2'
    },
    {
      type: BlockTypes.HERO_V3,
      title: 'Hero v3'
    },
    {
      type: BlockTypes.HERO_IMAGE_FULL,
      title: 'Hero Image Full'
    },
    {
      type: BlockTypes.STEP_V1,
      title: 'Step v1'
    }
    ,
    {
      type: BlockTypes.STEP_V2,
      title: 'Step v2'
    }   ,
    {
      type: BlockTypes.TEAM_V1,
      title: 'Team V1'
    },
    {
      type: BlockTypes.TEAM_V2,
      title: 'Team V2'
    },
    {
      type: BlockTypes.TESTIMONIALS_V1,
      title: 'TESTIMONIALS V1'
    },
    {
      type: BlockTypes.TESTIMONIALS_V2,
      title: 'TESTIMONIALS V2'
    },
    {
      type: BlockTypes.TESTIMONIALS_V3,
      title: 'TESTIMONIALS V3'
    }
  ];

  constructor(private blockConfigsMappingService: BlockConfigsMappingService, private blocksConfigEditingService: BlockConfigEditingService) {
  }

  ngOnInit(): void {
    this.blocksConfigEditingService.blockRemoveWatcher.subscribe(() => {
      this.selectedBlock = null;
      this.selectedBlockConfig = null;
    });
  }

  setSelectedBlock(block: Block | null) {
    this.selectedBlock = block;
    this.selectedBlockConfig = this.blockConfigsMappingService.getComponent(block?.type);
  }

  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }

  addBlock(blockType: BlockTypes) {
    this.toggleDrawer();
    this.addBlockEventEmitter.emit(blockType);
  }
}
