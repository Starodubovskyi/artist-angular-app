import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MenusService} from "../../menus.service";
import {PagesService} from "../../pages.service";

@Component({
  selector: 'app-new-page-create',
  templateUrl: './new-page-create.component.html',
  styleUrls: ['./new-page-create.component.css']
})
export class NewPageCreateComponent {

  menuCreateForm = new FormGroup({
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

  constructor(private router: Router, private menuService: MenusService, private pagesService: PagesService) {
  }

  ngOnInit() {
    this.pagesService.getAll().subscribe((response) => {
      this.pageList = response.map(item => ({
        id: item._id,
        text: item.title
      }));
    });
  }

  saveMenu() {
    this.menuService.createMenu({
      ...this.menuCreateForm.value,
      pages: this.menuCreateForm.value.pages?.map((page: any) => page.id)
    }).subscribe(() => {
      this.router.navigate(['/admin/pages']);
    });
  }
}
