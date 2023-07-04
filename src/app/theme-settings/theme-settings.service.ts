import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";
import {lastValueFrom} from "rxjs";
import * as tinycolor from 'tinycolor2';
import {environment} from "../../environments/environment";
import {
  BodyColors,
  Color,
  FooterThemeSettings,
  ThemeColors,
  ThemeSettings
} from "./theme-settings";

@Injectable({
  providedIn: 'root'
})
export class ThemeSettingsService {
  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
  }

  getSettings() {
    return this.http.get<ThemeSettings>(environment.apiUrl + '/v1/theme/theme-settings', {
    });
  }

  saveSettings(data: any) {
    return this.http.patch(environment.apiUrl + '/v1/theme/theme-settings', data, {
    });
  }

  loadTheme(): Promise<any> {
    return lastValueFrom(this.getSettings()).then((theme) => {
      this.updateThemeVariables(theme.colors ?? {}, {
        body: {
          background: theme.body.background,
          color: theme.body.color
        },
        footer: {
          background: theme.footer.background,
          color: theme.footer.color
        },
        header: {
          background: theme.header.background,
          color: theme.header.color
        }
      }, this.document);
    });
  }

  private computeColorPalette(hex: string): Color[] {
    return [
      this.getColorObject(tinycolor(hex).lighten(45), '50'),
      this.getColorObject(tinycolor(hex).lighten(40), '100'),
      this.getColorObject(tinycolor(hex).lighten(30), '200'),
      this.getColorObject(tinycolor(hex).lighten(20), '300'),
      this.getColorObject(tinycolor(hex).lighten(10), '400'),
      this.getColorObject(tinycolor(hex), '500'),
      this.getColorObject(tinycolor(hex).darken(10), '600'),
      this.getColorObject(tinycolor(hex).darken(20), '700'),
      this.getColorObject(tinycolor(hex).darken(30), '800'),
      this.getColorObject(tinycolor(hex).darken(40), '900'),
    ];
  }

  private getColorObject(value: tinycolor.Instance, name: string): Color {
    const c = tinycolor(value);

    return {
      name,
      hex: c.toHexString(),
      isDarkContrast: c.isLight()
    };
  }

  private updateThemeVariables(
    colors: ThemeColors | {},
    other: { body: BodyColors; header: { color: string; background: string }; footer: FooterThemeSettings },
    document: Document
  ) {
    let styleString = '';

    for (const [name, color] of Object.entries(colors)) {
      const palette = this.computeColorPalette(color);
      for (const variant of palette) {
        styleString += `--${name}-${variant.name}: ${variant.hex};`;
      }
    }

    for (const [pageSection, colorObj] of Object.entries(other)) {
      for (const [colorName, color] of Object.entries(colorObj)) {
        styleString += `--${pageSection}-${colorName}: ${color};`;
      }
    }

    // @ts-ignore
    document.documentElement.style = styleString;
  }
}
