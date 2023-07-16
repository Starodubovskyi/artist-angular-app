import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabpage-block-v1',
  templateUrl: './tabpage-block-v1.component.html',
  styleUrls: ['./tabpage-block-v1.component.css']
})
export class TabPageBlockV1Component {
  public href: string = "";

  constructor(private router: Router) {
  }

  menuLists = ['Biografia', 'Poetica', 'Luoghi principali di attività', 'Allegati alla mostra', 'Foto della mostra']

  options: string[] = ["10", "20", "50"];
  selectedQuantity = "";
  selectedList: any

  ngOnInit(): void {
    this.href = this.router.url;
    this.selectedList = this.href.split('/')[1]==='esposizioni' ? this.menuLists[3] : this.menuLists[0]
    this.selectedQuantity = " Anno ";
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
    }
  ]

  onSelected(value: string): void {
    this.selectedQuantity = value;
  }

  openMenuList(menuList: any) {
    this.selectedList = menuList;
  }


}
