import { Component } from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../loader.service";
import {ArtistApiService} from "../artist-api.service";

interface Exposition {
  id: string;
  expositionType: string;
  title: string;
  startYear: string;
  startMonth: string;
  startDay: string;
  endYear: string;
  endMonth: string;
  endDay: string;
  locationCountry: string;
  locationLocality: string;
  placement: string;
}

@Component({
  selector: 'app-expositions',
  templateUrl: './expositions.component.html',
  styleUrls: ['./expositions.component.css']
})
export class ExpositionsComponent {
  expositions: Exposition[] = [];
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
        this.artistApiService.getExpositions().subscribe({
          next: (resp) => {
            console.log(resp.response);
            this.expositions = resp.response;
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
