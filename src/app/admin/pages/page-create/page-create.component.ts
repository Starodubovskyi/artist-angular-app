import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PagesService} from "../../pages.service";

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})
export class PageCreateComponent implements OnInit {

  pageCreateForm = new FormGroup({
    title: new FormControl<string>('', [Validators.email, Validators.required]),
    tags: new FormArray([]),
    // new FormGroup({
    //   name: new FormControl<string | null>(''),
    //   value: new FormControl<string | null>('')
    // })
  });

  constructor(private router: Router, private pagesService: PagesService) {
  }

  ngOnInit(): void {
    this.pagesService.getTags().subscribe((tags) => {
      tags.forEach(tag => {
        this.pageCreateForm.controls.tags.push(new FormGroup({
          name: new FormControl({value: tag, disabled: true}),
          value: new FormControl(''),
        }));
      })
    });
  }

  addTag() {
    this.pageCreateForm.controls.tags.push(new FormGroup({
      name: new FormControl(''),
      value: new FormControl(''),
    }));
  }

  savePage(): boolean | void {
    this.pagesService.createPage({
      ...this.pageCreateForm.value,
      tags: this.pageCreateForm.value.tags
        .filter((tag) => !!tag.name)
    }).subscribe(() => {
      this.router.navigate(['/admin/sections']);
    });
  }
}
