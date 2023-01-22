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
    tags: new FormArray([])
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
            this.pagesService.getTags().subscribe((tags) => {
              tags.forEach(tag => {
                const foundTag = page.tags.find((tg) => tg.name === tag);

                this.pageEditForm.controls.tags.push(new FormGroup({
                  name: new FormControl(tag),
                  value: new FormControl(foundTag ? foundTag.value : ''),
                }));
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

  savePage(): boolean | void {
    if (!this.pageId) {
      return false;
    }

    this.pagesService.updatePage(this.pageId, {
      ...this.pageEditForm.value,
      tags: this.pageEditForm.value.tags.filter((tag) => !!tag.name)
    }).subscribe(() => {
      this.showToast = true;
    });
  }
}
