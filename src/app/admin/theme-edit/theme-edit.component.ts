import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {ThemeSettingsService} from "../../theme-settings/theme-settings.service";
import {MediaService} from "../../media/media.service";

enum CheckBoxTypeFooter { NONE, FooterV1, FooterV2, FooterV3, FooterV4, FooterV5}

enum CheckBoxTypeHeader {NONE, HeaderV1, HeaderV2, HeaderV3, HeaderV4,}

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit {

  themeForm = new FormGroup({
    siteName: new FormControl<string>(''),
    siteLogo: new FormControl<string>(''),
    colors: new FormGroup({
      primary: new FormControl<string | null>(''),
      secondary: new FormControl<string | null>(''),
      accent: new FormControl<string | null>('')
    }),
    body: new FormGroup({
      color: new FormControl<string | null>(''),
      background: new FormControl<string | null>('')
    }),
    header: new FormGroup({
      color: new FormControl(''),
      background: new FormControl<string | null>(''),
      fixed: new FormControl<boolean>(false),
      variantheader: new FormControl<string>('0'),
    }),
    footer: new FormGroup({
      color: new FormControl<string | null>(''),
      background: new FormControl<string | null>(''),
      variantfooter: new FormControl<string>('0'),
    })
  });

  logo: File | undefined;

  check_box_typeFooter = CheckBoxTypeFooter;
  currentlyCheckedFooter: CheckBoxTypeFooter;
  check_box_typeHeader = CheckBoxTypeHeader;
  currentlyCheckedHeader: CheckBoxTypeHeader;

  constructor(private http: HttpClient, private themeService: ThemeSettingsService, private mediaService: MediaService) {
  }

  ngOnInit(): void {
    this.fetchThemeSettings();
  }

  fetchThemeSettings() {
    this.themeService.getSettings().subscribe((response: any) => {
      console.log(response, 'response')
      this.themeForm.patchValue({
        ...response
      });
    });
  }

  save() {
    if (!this.logo) {
      this.themeService.saveSettings(this.themeForm.value).subscribe(() => {
      });
      return;
    }

    this.mediaService.saveMedia(this.logo).subscribe(resp => {
      this.themeForm.patchValue({
        siteLogo: resp.name,
      });

      this.themeService.saveSettings(this.themeForm.value).subscribe(() => {
      });
    });
  }

  onFileChange(event: any) {
    this.logo = event.target.files[0]
  }
}
