import {Component, OnInit} from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
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

  constructor(private menuService: MenusService, private router: Router, private loaderService: LoaderService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegment) => {
      this.fetchCurrentPage();
    })
  }

  fetchCurrentPage() {
    this.menuService.getMenuBySlug(this.router.url).subscribe({
      next: (response) => {
        this.blocks = response.blocks;
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
