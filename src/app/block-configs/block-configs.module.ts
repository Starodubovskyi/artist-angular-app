import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextBlockConfigComponent} from './config-components/text-block-config/text-block-config.component';
import {ImageBlockConfigComponent} from './config-components/image-block-config/image-block-config.component';
import {BlockConfigRenderDirective} from './block-config-render.directive';
import {ReactiveFormsModule} from "@angular/forms";
import {BlogV1ConfigComponent} from './config-components/blog-v1-config/blog-v1-config.component';
import {BlogV2ConfigComponent} from './config-components/blog-v2-config/blog-v2-config.component';
import {BlogV3ConfigComponent} from './config-components/blog-v3-config/blog-v3-config.component';
import {BlogV4ConfigComponent} from './config-components/blog-v4-config/blog-v4-config.component';
import {BlogV5ConfigComponent} from './config-components/blog-v5-config/blog-v5-config.component';
import {ContactV1ConfigComponent} from './config-components/contact-v1-config/contact-v1-config.component';
import {ContentV1ConfigComponent} from './config-components/content-v1-config/content-v1-config.component';
import {ContentV2ConfigComponent} from './config-components/content-v2-config/content-v2-config.component';
import {ContentV3ConfigComponent} from './config-components/content-v3-config/content-v3-config.component';
import {ContentV4ConfigComponent} from './config-components/content-v4-config/content-v4-config.component';
import {ContentV5ConfigComponent} from './config-components/content-v5-config/content-v5-config.component';
import {ContentV6ConfigComponent} from './config-components/content-v6-config/content-v6-config.component';
import {FeatureV1ConfigComponent} from './config-components/feature-v1-config/feature-v1-config.component';
import {FeatureV2ConfigComponent} from './config-components/feature-v2-config/feature-v2-config.component';
import {FeatureV3ConfigComponent} from './config-components/feature-v3-config/feature-v3-config.component';
import {FeatureV4ConfigComponent} from './config-components/feature-v4-config/feature-v4-config.component';
import {FeatureV5ConfigComponent} from './config-components/feature-v5-config/feature-v5-config.component';
import {FeatureV6ConfigComponent} from './config-components/feature-v6-config/feature-v6-config.component';
import {GalleryV1ConfigComponent} from './config-components/gallery-v1-config/gallery-v1-config.component';
import {GalleryV2ConfigComponent} from './config-components/gallery-v2-config/gallery-v2-config.component';
import {GalleryV3ConfigComponent} from './config-components/gallery-v3-config/gallery-v3-config.component';
import {HeroV1ConfigComponent} from './config-components/hero-v1-config/hero-v1-config.component';
import {HeroV2ConfigComponent} from './config-components/hero-v2-config/hero-v2-config.component';
import {HeroV3ConfigComponent} from './config-components/hero-v3-config/hero-v3-config.component';
import {StepV1ConfigComponent} from './config-components/step-v1-config/step-v1-config.component';
import {StepV2ConfigComponent} from './config-components/step-v2-config/step-v2-config.component';
import {TeamV1ConfigComponent} from './config-components/team-v1-config/team-v1-config.component';
import {TeamV2ConfigComponent} from './config-components/team-v2-config/team-v2-config.component';
import {
  TestimonialsV1ConfigComponent
} from './config-components/testimonials-v1-config/testimonials-v1-config.component';
import {
  TestimonialsV2ConfigComponent
} from './config-components/testimonials-v2-config/testimonials-v2-config.component';
import {
  TestimonialsV3ConfigComponent
} from './config-components/testimonials-v3-config/testimonials-v3-config.component';
import { DynamicConfigComponent } from './base/dynamic-config/dynamic-config.component';
import { DynamicConfigFormComponent } from './base/dynamic-config-form/dynamic-config-form.component';
import {QuillModule} from "ngx-quill";
import { HeroImageFullConfigComponent } from './config-components/hero-image-full-config/hero-image-full-config.component';
import { ContentV7ConfigComponent } from './config-components/content-v7-config/content-v7-config.component';
import { SocialV1ConfigComponent } from './config-components/social-v1-config/social-v1-config.component';

@NgModule({
  declarations: [
    TextBlockConfigComponent,
    ImageBlockConfigComponent,
    BlockConfigRenderDirective,
    BlogV1ConfigComponent,
    BlogV2ConfigComponent,
    BlogV3ConfigComponent,
    BlogV4ConfigComponent,
    BlogV5ConfigComponent,
    ContactV1ConfigComponent,
    ContentV1ConfigComponent,
    ContentV2ConfigComponent,
    ContentV3ConfigComponent,
    ContentV4ConfigComponent,
    ContentV5ConfigComponent,
    ContentV6ConfigComponent,
    ContentV7ConfigComponent,
    FeatureV1ConfigComponent,
    FeatureV2ConfigComponent,
    FeatureV3ConfigComponent,
    FeatureV4ConfigComponent,
    FeatureV5ConfigComponent,
    FeatureV6ConfigComponent,
    GalleryV1ConfigComponent,
    GalleryV2ConfigComponent,
    GalleryV3ConfigComponent,
    HeroV1ConfigComponent,
    HeroV2ConfigComponent,
    HeroV3ConfigComponent,
    StepV1ConfigComponent,
    StepV2ConfigComponent,
    TeamV1ConfigComponent,
    TeamV2ConfigComponent,
    TestimonialsV1ConfigComponent,
    TestimonialsV2ConfigComponent,
    TestimonialsV3ConfigComponent,
    DynamicConfigComponent,
    DynamicConfigFormComponent,
    HeroImageFullConfigComponent,
    ContentV7ConfigComponent,
    SocialV1ConfigComponent,
  ],
  exports: [
    BlockConfigRenderDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class BlockConfigsModule {
}
