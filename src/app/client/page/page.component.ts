import {Component, OnInit} from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Block} from "../../blocks/block.interface";
import {LoaderService} from "../../loader.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  blocks: Block[] = [];
  loaded: boolean = false;
  error: boolean = false;

  isListing: boolean = false;
  list: any[] = [];

  constructor(
    private menuService: MenusService,
    private router: Router,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegment) => {
      this.fetchCurrentPage();
    })
  }

  fetchCurrentPage() {
    this.menuService.getMenuBySlug(this.router.url).subscribe({
      next: (response) => {
        if (response.blocks) {
          this.blocks = response.blocks;
          this.isListing = false;
          this.list = [];
        } else {
          this.isListing = true;
          this.list = response.response;
          this.blocks = [];
        }
      },
      error: () => {
        this.error = true;
      },
      complete: () => {
        this.loaded = true;
      }
    });
  }

}
