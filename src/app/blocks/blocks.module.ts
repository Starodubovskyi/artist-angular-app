import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TextBlockComponent} from './text-block/text-block.component';
import {ImageBlockComponent} from './image-block/image-block.component';
import {BlocksMappingService} from "./blocks-mapping.service";
import { ContactBlockV1Component } from './contact-block-v1/contact-block-v1.component';
import { BlogBlockV1Component } from './blog-block-v1/blog-block-v1.component';
import { BlogBlockV2Component } from './blog-block-v2/blog-block-v2.component';
import { BlogBlockV3Component } from './blog-block-v3/blog-block-v3.component';
import { BlogBlockV4Component } from './blog-block-v4/blog-block-v4.component';
import { BlogBlockV5Component } from './blog-block-v5/blog-block-v5.component';
import { ContentBlockV1Component } from './content-block-v1/content-block-v1.component';
import { ContentBlockV2Component } from './content-block-v2/content-block-v2.component';
import { ContentBlockV3Component } from './content-block-v3/content-block-v3.component';
import { ContentBlockV4Component } from './content-block-v4/content-block-v4.component';
import { ContentBlockV5Component } from './content-block-v5/content-block-v5.component';
import { ContentBlockV6Component } from './content-block-v6/content-block-v6.component';
import { FeatureBlockV1Component } from './feature-block-v1/feature-block-v1.component';
import { FeatureBlockV2Component } from './feature-block-v2/feature-block-v2.component';
import { FeatureBlockV3Component } from './feature-block-v3/feature-block-v3.component';
import { FeatureBlockV4Component } from './feature-block-v4/feature-block-v4.component';
import { FeatureBlockV5Component } from './feature-block-v5/feature-block-v5.component';
import { FeatureBlockV6Component } from './feature-block-v6/feature-block-v6.component';
import { GalleryBlockV1Component } from './gallery-block-v1/gallery-block-v1.component';
import { GalleryBlockV2Component } from './gallery-block-v2/gallery-block-v2.component';
import { GalleryBlockV3Component } from './gallery-block-v3/gallery-block-v3.component';
import { HeroBlockV1Component } from './hero-block-v1/hero-block-v1.component';
import { HeroBlockV2Component } from './hero-block-v2/hero-block-v2.component';
import { HeroBlockV3Component } from './hero-block-v3/hero-block-v3.component';
import { StepBlockV1Component } from './step-block-v1/step-block-v1.component';
import { StepBlockV2Component } from './step-block-v2/step-block-v2.component';
import { TeamBlockV1Component } from './team-block-v1/team-block-v1.component';
import { TeamBlockV2Component } from './team-block-v2/team-block-v2.component';
import { TestimonialsBlockV1Component } from './testimonials-block-v1/testimonials-block-v1.component';
import { TestimonialsBlockV2Component } from './testimonials-block-v2/testimonials-block-v2.component';
import { TestimonialsBlockV3Component } from './testimonials-block-v3/testimonials-block-v3.component';
import {QuillModule} from "ngx-quill";
import {RouterLink} from "@angular/router";
import { HeroImageFullBlockComponent } from './hero-image-full-block/hero-image-full-block.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TextBlockComponent,
    ImageBlockComponent,
    ContactBlockV1Component,
    BlogBlockV1Component,
    BlogBlockV2Component,
    BlogBlockV3Component,
    BlogBlockV4Component,
    BlogBlockV5Component,
    ContentBlockV1Component,
    ContentBlockV2Component,
    ContentBlockV3Component,
    ContentBlockV4Component,
    ContentBlockV5Component,
    ContentBlockV6Component,
    FeatureBlockV1Component,
    FeatureBlockV2Component,
    FeatureBlockV3Component,
    FeatureBlockV4Component,
    FeatureBlockV5Component,
    FeatureBlockV6Component,
    GalleryBlockV1Component,
    GalleryBlockV2Component,
    GalleryBlockV3Component,
    HeroBlockV1Component,
    HeroBlockV2Component,
    HeroBlockV3Component,
    StepBlockV1Component,
    StepBlockV2Component,
    TeamBlockV1Component,
    TeamBlockV2Component,
    TestimonialsBlockV1Component,
    TestimonialsBlockV2Component,
    TestimonialsBlockV3Component,
    HeroImageFullBlockComponent,
  ],
    imports: [
        CommonModule,
        QuillModule,
        RouterLink,
        FormsModule,
        NgOptimizedImage
    ],
  exports: [
    TextBlockComponent,
    ImageBlockComponent,
  ],
  providers: [

    BlocksMappingService
  ]
})
export class BlocksModule {
}
