import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.css']
})
export class NestedMenuComponent {

  @Input() menus: any[] = [];

  constructor() {
  }

  ngOnInit() {

  }
}
