import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MenusService} from "../../menus.service";
import {Router} from "@angular/router";
import {MediaService} from "../../../media/media.service";

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.css']
})
export class MenuCreateComponent {

  menuCreateForm = new FormGroup({
    label: new FormControl<string>('', [Validators.required]),
    slug: new FormControl<string>('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 _@\-^!#$%&+={}./\\\[\]]+\.[a-zA-Z0-9]+$/)]),
    keywords: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    public: new FormControl<boolean>(false),
    pages: new FormControl([]),
    mtaCode: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>(''),
  });

  selectedPages: string[] = [];
  dropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true
  };

  image: File | undefined;

  constructor(private router: Router, private menuService: MenusService,  private mediaService: MediaService) {
  }

  saveMenu() {
    if (!this.image) {
      return this.menuService.createMenu({
        ...this.menuCreateForm.value
      }).subscribe(() => {
        this.router.navigate(['/admin/menus']);
      });
    }

    return this.mediaService.saveMedia(this.image).subscribe(resp => {
      this.menuCreateForm.patchValue({
        image: resp.path,
      });

      return this.menuService.createMenu({
        ...this.menuCreateForm.value
      }).subscribe(() => {
        this.router.navigate(['/admin/menus']);
      });
    });
  }

  onFileChange(event: any) {
    this.image = event.target.files[0]
  }
}
