import { Component } from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../loader.service";
import {ArtistApiService} from "../artist-api.service";

@Component({
  selector: 'app-exposition',
  templateUrl: './exposition.component.html',
  styleUrls: ['./exposition.component.css']
})
export class ExpositionComponent {
  exposition: any = {};
  loaded: boolean = false;
  error: boolean = false;
  private sub: any;

  constructor(
    private menuService: MenusService,
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    private artistApiService: ArtistApiService
  ) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.fetchCurrentPage(params['id']);
    })
  }

  fetchCurrentPage(id) {
    this.artistApiService.getSingleExposition(id).subscribe({
      next: (resp) => {
        console.log(resp.response);
        this.exposition = resp.response;
      },
      error: () => {
        this.error = true;
        this.router.navigate(['/']);
      },
      complete: () => {
        this.loaded = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
