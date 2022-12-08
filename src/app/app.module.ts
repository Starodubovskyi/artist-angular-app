import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {TreeModule} from "@circlon/angular-tree-component";
import {TransferHttpCacheModule} from '@nguniversal/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SortablejsModule} from "ngx-sortablejs";
import {SpinnerComponent} from './spinner/spinner.component';
import {LoadingInterceptor} from "./loading.interceptor";
import {ThemeSettingsModule} from "./theme-settings/theme-settings.module";
import {QuillConfigModule} from "ngx-quill";

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SortablejsModule.forRoot({animation: 150}),
    NgMultiSelectDropDownModule.forRoot(),
    TreeModule,
    AppRoutingModule,
    ThemeSettingsModule,
    QuillConfigModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{'header': 1}, {'header': 2}],               // custom button values
          [{'list': 'ordered'}, {'list': 'bullet'}],
          [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent

          [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
          [{'header': [1, 2, 3, 4, 5, 6, false]}],

          [{'color': []}, {'background': []}],          // dropdown with defaults from theme
          [{'align': []}],

          ['clean'], // remove formatting button
          ['link', 'video']
        ]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
