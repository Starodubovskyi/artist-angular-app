import {Component, OnDestroy, OnInit} from '@angular/core';
import {Block} from "../../../blocks/block.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PagesService} from "../../pages.service";
import {Page} from "../../page";

@Component({
  selector: 'app-page-block-edit',
  templateUrl: './page-block-edit.component.html',
  styleUrls: ['./page-block-edit.component.css']
})
export class PageBlockEditComponent implements OnInit, OnDestroy {
  blocks: Block[] = [];

  showToast = false;

  page: Page | null = null;

  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private pagesService: PagesService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {

      if (!params['id']) {
        return this.router.navigate(['/admin/pages']);
      }

      return this.pagesService.getPageById(params['id']).subscribe(
        {
          next: (page) => {
            if (page) {
              this.page = page;
              this.blocks = page.blocks;
            } else {
              throw Error("This page doesn't exist");
            }
          },
          error: () => {
            this.router.navigate(['/admin/pages'])
          }
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSaveTrigger(blocks: Block[]): boolean | void {
    if (!this.page || !this.page._id) {
      return false;
    }

    this.pagesService.updatePage(this.page._id, {
      blocks,
    }).subscribe(() => {
      this.showToast = true;
    });
  }

  onBack() {
    this.router.navigate(['/admin/pages', this.page._id, 'edit']);
  }
}
