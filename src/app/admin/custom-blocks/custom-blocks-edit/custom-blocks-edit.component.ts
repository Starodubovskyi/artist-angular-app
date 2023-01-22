import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CustomBlockService} from "../custom-block.service";

@Component({
  selector: 'app-custom-blocks-edit',
  templateUrl: './custom-blocks-edit.component.html',
  styleUrls: ['./custom-blocks-edit.component.css']
})
export class CustomBlocksEditComponent {
  blockId: string = '';

  customBlockEditForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
  });

  private sub: any;

  constructor(private route: ActivatedRoute, private customBlocksService: CustomBlockService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.customBlocksService.getBlockById(params['id']).subscribe((block) => {
        if (block) {
          this.customBlockEditForm.patchValue({
            name: block.name
          });

          this.blockId = block._id;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  saveCustomBlock(): boolean | void {
    if (!this.blockId) {
      return false;
    }

    this.customBlocksService.updateCustomBlock(this.blockId, this.customBlockEditForm.value).subscribe(() => {
    });
  }
}
