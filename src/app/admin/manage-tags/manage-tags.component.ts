import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {PagesService} from "../pages.service";
import {id} from "date-fns/locale";

@Component({
  selector: 'app-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.css']
})
export class ManageTagsComponent implements OnInit, OnDestroy {

  allTags: Array<any> = [];

  private sub: any;

  constructor(private route: ActivatedRoute, private pagesService: PagesService) {
  }

  ngOnInit(): void {
    this.pagesService.getTags().subscribe((tags) => {
      this.allTags = tags
    })
  }
  deleteTag(idTag) {
    this.allTags.slice(3, 1)
  }

  removeElement(data:any){
    const index: number = this.allTags.indexOf(data);
    if (index !== -1) {
      this.allTags.splice(index, 1);
    }
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
