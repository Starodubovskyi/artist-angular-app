import {Component, OnInit} from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../loader.service";
import {ArtistApiService} from "../artist-api.service";
import {format, parseISO} from "date-fns";


interface Biography {
  firstName?: string;
  lastName?: string;
  deathYear?: number;
  birthYear?: number;
  deathDate?: string;
  birthDate?: string;
  biographies?: any[];
  deathLocality?: string;
  deathCountry?: string;
  birthCountry?: string;
  birthLocality?: string;
}

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit{
  biography: Biography = {};
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
        this.artistApiService.getBiography().subscribe({
          next: (resp) => {
            this.biography = {
              ...resp.response,
              deathDate: format(parseISO(resp.response.deathDate),  'yyyy-MM-dd'),
              birthDate: format(parseISO(resp.response.birthDate),  'yyyy-MM-dd'),
            };
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
