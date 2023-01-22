import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomBlockService} from "../custom-block.service";

@Component({
  selector: 'app-custom-blocks-create',
  templateUrl: './custom-blocks-create.component.html',
  styleUrls: ['./custom-blocks-create.component.css']
})
export class CustomBlocksCreateComponent {
  customBlocksCreateForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
  });

  constructor(private router: Router, private customBlocksService: CustomBlockService) {

  }

  saveCustomBlock() {
    this.customBlocksService.createCustomBlock(this.customBlocksCreateForm.value).subscribe(() => {
      this.router.navigate(['/admin/custom-blocks']);
    });
  }

}
