import {Component, Input} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel-block-component',
  templateUrl: './carousel-block-component.component.html',
  styleUrls: ['./carousel-block-component.component.css']
})
export class CarouselBlockComponentComponent {

  @Input() slides = [
    {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},
    {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
    {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},
    {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},
    {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];
}
