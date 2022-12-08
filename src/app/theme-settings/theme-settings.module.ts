import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeSettingsService} from "./theme-settings.service";

export function initThemeConfig(themeService: ThemeSettingsService) {
  return () => themeService.loadTheme();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [ThemeSettingsService],
      useFactory: initThemeConfig,
      multi: true
    }
  ]
})
export class ThemeSettingsModule {
}
