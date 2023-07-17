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
  backImages: any[] = [];
  frontImages: any[] = [];

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
        this.backImages = resp.response.artworkPhotos.filter((item) => item.imgSide === 'BACK').map((item) => ({
          ...item,
          image: item.imageDetailUrl
        }))
        this.frontImages = resp.response.artworkPhotos.filter((item) => item.imgSide === 'FRONT').map((item) => ({
          ...item,
          image: item.imageDetailUrl
        }))
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

  data = [
    {
      "titleContent": "Eventi",
      "content": "{\"ops\":[{\"insert\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\\nbeen the industry's standard dummy text ever since the 1500s, when an unknown printer\\ntook a galley of type and scrambled it to make a type specimen book.\\nIt has survived not only five centuries, but also the leap into electronic typesetting, \\nremaining essentially unchanged. \\n\"}]}",
      "image": "https://res.cloudinary.com/djgssycvb/image/upload/v1689249380/CloudinaryDemo/zl4phi0irksz2ee0uhtx.jpg",
      "imageDescription": "Inserisci qui la didascalia",
      "textButton": "Button",
      "link": "/button"
    },
    {
      "titleContent": "DAVID GARRETRIO - TOUR 2023",
      "content": "{\"ops\":[{\"insert\":\"După turneul de succes al anului 2022, „Alive-my Soundtrack”, care a cuprins peste 32 de concerte în 11 țări, celebrul violonist \"},{\"attributes\":{\"bold\":true},\"insert\":\"David Garrett\"},{\"insert\":\" deschide un nou capitol, în stilul clasic, și traversează mapamondul cu cea mai nouă producție concertistică, în cadrul turneului \"},{\"attributes\":{\"bold\":true},\"insert\":\"„ICONIC TOUR 2023”.\"},{\"insert\":\"\\nTurneul de promovare al noului album de succes semnat de David Garrett - „ICONIC”, lansat de Deutsche Grammophon, a debutat în luna martie a acestui an cu un show remarcabil în Rosengarten, Mannheim. \"},{\"attributes\":{\"bold\":true},\"insert\":\"Noul său concert „ICONIC” se bucură de un succes imens în rândul publicului, astfel că în numai două luni de la debut a înregistrat vânzări de peste 100.000 de bilete vândute, iar alte 26 de concerte sunt deja sold-out.\"},{\"insert\":\"\\n\"}]}",
      "image": "https://res.cloudinary.com/djgssycvb/image/upload/v1689249524/CloudinaryDemo/e154o5z0om0yjsvd5bbt.jpg",
      "imageDescription": "Descriptione",
      "textButton": "Button",
      "link": "/button"
    },
    {
      "titleContent": "",
      "content": "{\"ops\":[{\"insert\":\"\\n\"}]}",
      "image": "https://res.cloudinary.com/djgssycvb/image/upload/v1689250310/CloudinaryDemo/wxub6t8gythn0l3y8mti.png",
      "imageDescription": "",
      "textButton": "",
      "link": ""
    },
    {
      "titleContent": "",
      "content": "{\"ops\":[{\"insert\":\"\\n\"}]}",
      "image": "https://img.freepik.com/free-photo/dramatic-white-…orful-sunset-cloudscape-background_90220-1208.jpg",
      "imageDescription": "",
      "textButton": "",
      "link": ""
    },
    {
      "titleContent": "",
      "content": "{\"ops\":[{\"insert\":\"\\n\"}]}",
      "image": "https://static.vecteezy.com/packs/media/vector/hero-800px-cc1b446b.jpg",
      "imageDescription": "",
      "textButton": "",
      "link": ""
    },
    {
      "titleContent": "",
      "content": "{\"ops\":[{\"insert\":\"\\n\"}]}",
      "image": "https://images.stockfreeimages.com/18215/sfi226w/182152044.jpg",
      "imageDescription": "",
      "textButton": "",
      "link": ""
    }
  ]
}
