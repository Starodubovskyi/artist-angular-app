import {Component} from '@angular/core';
import {MenusService} from "../../admin/menus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../loader.service";
import {ArtistApiService} from "../artist-api.service";

@Component({
  selector: 'app-opera',
  templateUrl: './opera.component.html',
  styleUrls: ['./opera.component.css']
})
export class OperaComponent {
  opera: any = {};
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
    this.artistApiService.getSingleOpera(id).subscribe({
      next: (resp) => {
        this.opera = resp.response;
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
