import {Component, OnInit} from '@angular/core';
import {PagesService} from "../../pages.service";
import {Page} from "../../page";

@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.component.html',
  styleUrls: ['./page-listing.component.css']
})
export class PageListingComponent implements OnInit {

  pages: Page[] = [];

  toDeletePageId: null | string = null;

  constructor(private pagesService: PagesService) {
  }

  ngOnInit(): void {
    this.fetchPageList();
  }

  fetchPageList() {
    this.pagesService.getAll().subscribe((response) => {
      this.pages = response;
    });
  }

  deletePage() {
    if (!this.toDeletePageId) {
      return;
    }

    this.pagesService.deleteById(this.toDeletePageId).subscribe(() => {
      this.toDeletePageId = null;
      this.fetchPageList();
    });
  }
}
