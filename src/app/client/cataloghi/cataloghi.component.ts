import { Component } from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../loader.service";
import {ArtistApiService} from "../artist-api.service";

interface Catalog {
  id: string;
  title: string;
  publishYear: string;
  publishMonth: string;
  publishDay: string;
  locale: string;
}

@Component({
  selector: 'app-cataloghi',
  templateUrl: './cataloghi.component.html',
  styleUrls: ['./cataloghi.component.css']
})
export class CataloghiComponent {
  catalogs: Catalog[] = [];
  loaded: boolean = false;
  error: boolean = false;

  constructor(
    private menuService: MenusService,
    private router: Router,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    private artistApiService: ArtistApiService
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
        this.artistApiService.getCatalogs().subscribe({
          next: (resp) => {
            this.catalogs = resp.response;
          },
          error: () => {
            this.error = true;
            this.router.navigate(['/']);
          },
          complete: () => {
            this.loaded = true;
          }
        })
      },
      error: () => {
        this.error = true;
        this.router.navigate(['/']);
      }
    });
  }
}
