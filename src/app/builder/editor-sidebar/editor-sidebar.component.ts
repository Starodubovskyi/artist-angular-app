import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Block} from "../../blocks/block.interface";
import {BlockConfig} from "../../block-configs/block-config.interface";
import {BlockConfigsMappingService} from "../../block-configs/block-configs-mapping.service";
import {BlockTypes} from "../../blocks/block-types";
import {BlockConfigEditingService} from "../../block-configs/block-config-editing.service";
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-editor-sidebar',
  templateUrl: './editor-sidebar.component.html',
  styleUrls: ['./editor-sidebar.component.css']
})
export class EditorSidebarComponent implements OnInit {

  @Input() blocks: Block[] = [];
  @Input() singleBlockMode: boolean = false;
  @Output('addBlock') addBlockEventEmitter = new EventEmitter();

  @Output() showEditorSidebar = new EventEmitter<boolean>();
  selectedBlock: Block | null = null;

  selectedBlockConfig: BlockConfig | null = null;

  showDrawer = false;

  showEditor = false
  setShowEditorSidebar() {
    this.showEditor =  !this.showEditor
    this.showEditorSidebar.emit(this.showEditor);
  }


  sortableOptions = {
    onUpdate: () => {
      this.blocksConfigEditingService.blockSortObservable.next(this.blocks);
    }
  };

  availableBlocks = [
    {
      type: BlockTypes.TEXT,
      title: `Text block`,
      image: "../../../assets/images-blocks/SampleText.png"
    },
    {
      type: BlockTypes.IMAGE,
      title: 'Image block',
      image: "../../../assets/images-blocks/Image Block.png"
    },
    {
      type: BlockTypes.BLOG_V1,
      title: 'Block v1',
      image: "../../../assets/images-blocks/Blog V1.png"
    },
    {
      type: BlockTypes.BLOG_V2,
      title: 'Block v2',
      image: "../../../assets/images-blocks/Blog V2.png"
    },
    {
      type: BlockTypes.BLOG_V3,
      title: 'Block v3',
      image: "../../../assets/images-blocks/Blog V3.png"
    },
    {
      type: BlockTypes.BLOG_V4,
      title: 'Block v4',
      image: "../../../assets/images-blocks/Blog V4.png"
    },
    {
      type: BlockTypes.BLOG_V5,
      title: 'Block v5',
      image: "../../../assets/images-blocks/Blog V5.png"
    },
    {
      type: BlockTypes.CONTACT_V1,
      title: 'Contact v1',
      image: "../../../assets/images-blocks/Contact Us.png"
    }, {
      type: BlockTypes.CONTENT_V1,
      title: 'Content v1',
      image: "../../../assets/images-blocks/Content V1.png"
    }, {
      type: BlockTypes.CONTENT_V2,
      title: 'Content v2',
      image: "../../../assets/images-blocks/Content V2.png"
    }, {
      type: BlockTypes.CONTENT_V3,
      title: 'Content v3',
      image: "../../../assets/images-blocks/Content V3.png"
    }, {
      type: BlockTypes.CONTENT_V4,
      title: 'Content v4',
      image: "../../../assets/images-blocks/Content V4.png"
    }
    , {
      type: BlockTypes.CONTENT_V5,
      title: 'Content v5',
      image: "../../../assets/images-blocks/Content V5.png"
    },
    {
      type: BlockTypes.CONTENT_V6,
      title: 'Content v6',
      image: "../../../assets/images-blocks/Content V6.png"
    },
    {
      type: BlockTypes.CONTENT_V7,
      title: 'Content v7',
      image: "../../../assets/images-blocks/Content V7.png"
    },
    {
      type: BlockTypes.FEATURE_V1,
      title: 'Feature V1',
      image: "../../../assets/images-blocks/Feature V1.png"
    },
    {
      type: BlockTypes.FEATURE_V2,
      title: 'Feature V2',
      image: "../../../assets/images-blocks/Feature V2.png"
    },
    {
      type: BlockTypes.FEATURE_V3,
      title: 'Feature V3',
      image: "../../../assets/images-blocks/Feature V3.png"
    },
    {
      type: BlockTypes.FEATURE_V4,
      title: 'Feature V4',
      image: "../../../assets/images-blocks/Feature V4.png"
    },
    {
      type: BlockTypes.FEATURE_V5,
      title: 'Feature V5',
      image: "../../../assets/images-blocks/Feature V5.png"
    },
    {
      type: BlockTypes.FEATURE_V6,
      title: 'Feature V6',
      image: "../../../assets/images-blocks/Feature V6.png"
    },
    {
      type: BlockTypes.GALLERY_V1,
      title: 'Gallery v1',
      image: "../../../assets/images-blocks/Gallery V1.png"
    },
    {
      type: BlockTypes.GALLERY_V2,
      title: 'Gallery v2',
      image: "../../../assets/images-blocks/Gallery V2.png"
    },
    {
      type: BlockTypes.GALLERY_V3,
      title: 'Gallery v3',
      image: "../../../assets/images-blocks/Gallery V3.png"
    },
    {
      type: BlockTypes.HERO_V1,
      title: 'Hero v1',
      image: "../../../assets/images-blocks/Hero V1.png"
    },
    {
      type: BlockTypes.HERO_V2,
      title: 'Hero v2',
      image: "../../../assets/images-blocks/Hero V2.png"
    },
    {
      type: BlockTypes.HERO_V3,
      title: 'Hero v3',
      image: "../../../assets/images-blocks/Hero V3.png"
    },
    {
      type: BlockTypes.HERO_IMAGE_FULL,
      title: 'Hero Image Full',
      image: "../../../assets/images-blocks/Hero Image Full Page.png"
    },
    {
      type: BlockTypes.STEP_V1,
      title: 'Step v1',
      image: "../../../assets/images-blocks/Step V1.png"
    }
    ,
    {
      type: BlockTypes.STEP_V2,
      title: 'Step v2',
      image: "../../../assets/images-blocks/Step V2.png"
    },
    {
      type: BlockTypes.TEAM_V1,
      title: 'Team V1',
      image: "../../../assets/images-blocks/Team V1.png"
    },
    {
      type: BlockTypes.TEAM_V2,
      title: 'Team V2',
      image: "../../../assets/images-blocks/Team V2.png"
    },
    {
      type: BlockTypes.TESTIMONIALS_V1,
      title: 'TESTIMONIALS V1',
      image: "../../../assets/images-blocks/Testimonials V1.png"
    },
    {
      type: BlockTypes.TESTIMONIALS_V2,
      title: 'TESTIMONIALS V2',
      image: "../../../assets/images-blocks/Testimonials V2.png"
    },
    {
      type: BlockTypes.TESTIMONIALS_V3,
      title: 'TESTIMONIALS V3',
      image: "../../../assets/images-blocks/Testimonials V3.png"
    },
    {
      type: BlockTypes.SOCIAL_V1,
      title: 'SOCIAL V1',
      image: "../../../assets/images-blocks/Social V1.png"
    },
    {
      type: BlockTypes.CAROUSEL_V1,
      title: 'CAROUSEL V1',
      image: "../../../assets/images-blocks/Social V1.png"
    }
  ];

  constructor(
    private blockConfigsMappingService: BlockConfigsMappingService,
    private blocksConfigEditingService: BlockConfigEditingService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
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

    if (block && block.id) {
      const blockElement = this.document.getElementById(block.id);

      if (blockElement) {
        blockElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  }

  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }

  addBlock(blockType: BlockTypes) {
    this.toggleDrawer();
    this.addBlockEventEmitter.emit(blockType);
  }
}
