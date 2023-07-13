import {Component, Input, OnInit} from '@angular/core';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel-block-v1',
  templateUrl: './carousel-block-v1.component.html',
  styleUrls: ['./carousel-block-v1.component.css']
})
export class CarouselBlockV1Component implements OnInit {
  data: any = {};

  @Input() contentItems = this.data.items

  @Input() indicators = false;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; // Default to 3 seconds

  selectedIndex = 0;

  ngOnInit() {
    if (this.autoSlide){
      this.autoSlideImages();
    }
    this.contentItems = this.data.items
  }
  // Changes slide in every 3 sec
  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval)
  }

  //sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.contentItems.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick(): void {
    if (this.selectedIndex === this.contentItems.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex++;
    }
  }
}
