import {Component, OnDestroy, OnInit} from '@angular/core';
import {Block} from "../../../blocks/block.interface";
import {ActivatedRoute} from "@angular/router";
import {PagesService} from "../../pages.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit, OnDestroy {
  blocks: Block[] = [];

  showToast = false;

  pageId: string = '';

  pageEditForm = new FormGroup({
    title: new FormControl<string>('', [Validators.email, Validators.required]),
    tags: new FormArray([new FormGroup({
      name: new FormControl<string | null>(''),
      value: new FormControl<string | null>('')
    })])
  });

  private sub: any;

  constructor(private route: ActivatedRoute, private pagesService: PagesService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.pagesService.getPageById(params['id']).subscribe((page) => {
        if (page) {
          this.pageEditForm.patchValue({
            title: page.title
          });

          if (Array.isArray(page.tags)) {
            page.tags.forEach((tag, index) => {
              if (!tag) {
                return;
              }

              const foundControl = this.pageEditForm.controls.tags.at(index);

              if (!foundControl) {
                return this.pageEditForm.controls.tags.push(new FormGroup({
                  name: new FormControl(tag.name),
                  value: new FormControl(tag.value)
                }));
              }

              foundControl.patchValue({
                name: tag.name,
                value: tag.value
              })

            });
          }

          this.pageId = page._id;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addTag() {
    this.pageEditForm.controls.tags.push(new FormGroup({
      name: new FormControl(''),
      value: new FormControl(''),
    }));
  }

  removeTag(index: number) {
    this.pageEditForm.controls.tags.removeAt(index);
  }

  savePage(): boolean | void {
    if (!this.pageId) {
      return false;
    }

    this.pagesService.updatePage(this.pageId, this.pageEditForm.value).subscribe(() => {
      this.showToast = true;
    });
  }
}
