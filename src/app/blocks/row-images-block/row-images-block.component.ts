import {Component} from '@angular/core';

@Component({
  selector: 'app-row-images-block',
  templateUrl: './row-images-block.component.html',
  styleUrls: ['./row-images-block.component.css']
})
export class RowImagesBlockComponent {
  // data: any = {};

  data = [
    {
      imageSrc: 'https://writers.com/wp-content/uploads/2021/10/how_to_write_free_verse-scaled-e1634665871405.jpg',
      href: '/',
      alt: 'alt',
    },
    {
      imageSrc: 'https://writers.com/wp-content/uploads/2021/10/how_to_write_free_verse-scaled-e1634665871405.jpg',
      href: '/',
      alt: 'alt',
    }, {
      imageSrc: 'https://writers.com/wp-content/uploads/2021/10/how_to_write_free_verse-scaled-e1634665871405.jpg',
      href: '/',
      alt: 'alt',
    }, {
      imageSrc: 'https://writers.com/wp-content/uploads/2021/10/how_to_write_free_verse-scaled-e1634665871405.jpg',
      href: '/',
      alt: 'alt',
    }
  ]
  displayData = this.data.slice(0, 3)
  allData(){
    this.displayData = this.data
  }
}

