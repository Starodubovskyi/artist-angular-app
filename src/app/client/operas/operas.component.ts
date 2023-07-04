import { Component } from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../loader.service";
import {ArtistApiService} from "../artist-api.service";
import {format, parseISO} from "date-fns";

interface Opera {
  slug: string;
  label: string;
  image: string;
}

@Component({
  selector: 'app-operas',
  templateUrl: './operas.component.html',
  styleUrls: ['./operas.component.css']
})
export class OperasComponent {
  operas: Opera[] = [];
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
        this.artistApiService.getOperas().subscribe({
          next: (resp) => {
            this.operas = resp;
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
