import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PagesService} from "../../pages.service";
import {MenusService} from "../../menus.service";
import {ActivatedRoute} from "@angular/router";
import {MediaService} from "../../../media/media.service";

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit, OnDestroy {

  menuEditForm = new FormGroup({
    label: new FormControl<string>('', [Validators.required]),
    slug: new FormControl<string>('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 _@\-^!#$%&+={}./\\\[\]]+\.[a-zA-Z0-9]+$/)]),
    keywords: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    public: new FormControl<boolean>(false),
    image: new FormControl<string>('')
  });

  selectedPages: string[] = [];
  dropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true
  };

  menuId: string = '';

  image: File | undefined;

  isSystem: boolean = false;

  private sub: any;

  constructor(private route: ActivatedRoute, private pagesService: PagesService, private menuService: MenusService, private mediaService: MediaService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.menuId = params['id'];

      this.menuService.getMenuById(params['id']).subscribe((currentMenuItem) => {
        this.menuEditForm.patchValue({
          label: currentMenuItem.label,
          slug: currentMenuItem.slug,
          keywords: currentMenuItem.keywords,
          description: currentMenuItem.description,
          public: currentMenuItem.public,
          image: currentMenuItem.image
        });

        this.isSystem = !!currentMenuItem.isSystem;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  saveMenu() {
    if (!this.image) {
      this.menuService.updateMenu(this.menuId, {
        ...this.menuEditForm.value
      }).subscribe(() => {
      });
    }

    return this.mediaService.saveMedia(this.image).subscribe(resp => {
      this.menuEditForm.patchValue({
        image: resp.path,
      });

      this.menuService.updateMenu(this.menuId, {
        ...this.menuEditForm.value
      }).subscribe(() => {
      });
    });
  }

  onFileChange(event: any) {
    this.image = event.target.files[0]
  }
}
