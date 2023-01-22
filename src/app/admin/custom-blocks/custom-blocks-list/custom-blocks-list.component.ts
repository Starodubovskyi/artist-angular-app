import {Component} from '@angular/core';
import {CustomBlockService} from "../custom-block.service";

@Component({
  selector: 'app-custom-blocks-list',
  templateUrl: './custom-blocks-list.component.html',
  styleUrls: ['./custom-blocks-list.component.css']
})
export class CustomBlocksListComponent {

  customBlocks: any[] = [];

  toDeleteCustomBlockId: null | string = null;

  constructor(private customBlockService: CustomBlockService) {
  }

  ngOnInit() {
    this.fetchCustomBlockList();
  }

  fetchCustomBlockList() {
    this.customBlockService.getAll().subscribe((data) => {
      this.customBlocks = data;
    });
  }

  deleteCustomBlock() {
    if (!this.toDeleteCustomBlockId) {
      return;
    }

    this.customBlockService.deleteById(this.toDeleteCustomBlockId).subscribe(() => {
      this.toDeleteCustomBlockId = null;
      this.fetchCustomBlockList();
    });
  }
}
