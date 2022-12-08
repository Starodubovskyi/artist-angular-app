import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {ThemeSettingsService} from "../../theme-settings/theme-settings.service";
import {MediaService} from "../../media/media.service";

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit{

  constructor(private http: HttpClient, private themeService: ThemeSettingsService, private mediaService: MediaService) {
  }

  logoForm = new FormGroup({
    logoName: new FormControl<string>(''),
  })

  colorForm = new FormGroup({
    colorBackground: new FormGroup({
      color: new FormControl<string | null>(''),
      background: new FormControl<string | null>('')
    }),
    colorHeader: new FormGroup({
      color: new FormControl(''),
      background: new FormControl<string | null>('')
    }),
    colorFooter: new FormGroup({
      color: new FormControl<string | null>(''),
      background: new FormControl<string | null>('')
    })
  })
  file: File | undefined;


  onFileChange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  upload() {
    if (this.file) {
      const data = {
        siteName: this.logoForm.value.logoName || ''
      }

      this.themeService.saveSettings(data).subscribe(() => {
      });

      this.mediaService.saveMedia(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }
   ngOnInit(): void {
    this.fetchThemeSettings();
  }


  fetchThemeSettings(){
    this.themeService.getSettings().subscribe((response: any)=> {
      this.colorForm.controls.colorBackground.patchValue({
        color: response.body.color,
        background: response.body.background
      })
      this.colorForm.controls.colorHeader.patchValue({
        color: response.header.color,
        background: response.header.background
      })
      this.colorForm.controls.colorFooter.patchValue({
        color: response.footer.color,
        background: response.footer.background
      })
    })
  }

  saveBackGround() {
    const data = {
      body: {
        color: this.colorForm.controls.colorBackground?.value?.color,
        background: this.colorForm.controls.colorBackground?.value?.background,
      }
    }
    this.themeService.saveSettings(data).subscribe(() => {
    });
  }

  saveHeader() {
    const data = {
      header: {
        color: this.colorForm.controls.colorHeader?.value?.color,
        background: this.colorForm.controls.colorHeader?.value?.background,
        fixed: true,
        variant: 1
      }
    }
    this.themeService.saveSettings(data).subscribe(() => {
    });
  }

  saveFooter() {
    const data = {
      footer: {
        color: this.colorForm.controls.colorFooter?.value?.color,
        background: this.colorForm.controls.colorFooter?.value?.background,
        fixed: true,
        variant: 1
      }
    }
    this.themeService.saveSettings(data).subscribe(() => {
    });
  }
}
