import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PagesService} from "../../pages.service";
import {MenusService} from "../../menus.service";

@Component({
  selector: 'app-new-page-edit',
  templateUrl: './new-page-edit.component.html',
  styleUrls: ['./new-page-edit.component.css']
})
export class NewPageEditComponent {

  menuEditForm = new FormGroup({
    label: new FormControl<string>('', [Validators.required]),
    slug: new FormControl<string>('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 _@\-^!#$%&+={}./\\\[\]]+\.[a-zA-Z0-9]+$/)]),
    keywords: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    public: new FormControl<boolean>(false),
    pages: new FormControl([]),
  });

  pageList: any = [];
  selectedPages: string[] = [];
  dropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true
  };

  menuId: string = '';

  private sub: any;

  constructor(private route: ActivatedRoute, private pagesService: PagesService, private menuService: MenusService) {
  }

  ngOnInit(): void {
    this.pagesService.getAll().subscribe((response) => {
      this.pageList = response.map(item => ({
        id: item._id,
        text: item.title
      }));

      this.sub = this.route.params.subscribe((params) => {
        this.menuId = params['id'];

        this.menuService.getMenuById(params['id']).subscribe((currentMenuItem) => {
          this.menuEditForm.patchValue({
            label: currentMenuItem.label,
            slug: currentMenuItem.slug,
            keywords: currentMenuItem.keywords,
            description: currentMenuItem.description,
            public: currentMenuItem.public,
            pages: this.pageList.filter((page: any) => currentMenuItem.pages.includes(page.id))
          });
        });
      });
    });
  }

  saveMenu() {
    this.menuService.updateMenu(this.menuId, {
      ...this.menuEditForm.value,
      pages: this.menuEditForm.value.pages?.map((page: any) => page.id)
    }).subscribe(() => {
    });
  }
}
