import { Component } from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../loader.service";
import {ArtistApiService} from "../artist-api.service";

interface Anthology {
  id: string;
  origin: string;
  dateYear: string;
  dateMonth: string;
  dateDay: string;
  locale: string;
}


@Component({
  selector: 'app-antologie',
  templateUrl: './antologie.component.html',
  styleUrls: ['./antologie.component.css']
})
export class AntologieComponent {
  anthologies: Anthology[] = [];
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
        this.artistApiService.getAnthologies().subscribe({
          next: (resp) => {
            this.anthologies = resp.response;
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
