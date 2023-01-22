import { Component } from '@angular/core';
import {Block, CustomBlock} from "../../../blocks/block.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomBlockService} from "../custom-block.service";

@Component({
  selector: 'app-custom-blocks-design',
  templateUrl: './custom-blocks-design.component.html',
  styleUrls: ['./custom-blocks-design.component.css']
})
export class CustomBlocksDesignComponent {
  block: CustomBlock;

  showToast = false;

  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private customBlockService: CustomBlockService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {

      if (!params['id']) {
        return this.router.navigate(['/admin/custom-blocks']);
      }

      return this.customBlockService.getBlockById(params['id']).subscribe(
        {
          next: (block) => {
            if (block) {
              this.block = block;
            } else {
              throw Error("This page doesn't exist");
            }
          },
          error: () => {
            this.router.navigate(['/admin/custom-blocks']);
          }
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSaveTrigger(blocks: Block[]): boolean | void {
    if (!this.block || !this.block._id) {
      return false;
    }

    this.customBlockService.updateCustomBlock(this.block._id, {
      config: blocks[0],
    }).subscribe(() => {
      this.showToast = true;
    });
  }

  backToCustomBlock() {
    this.router.navigate(['/admin/custom-blocks', this.block._id, 'edit']);
  }
}
