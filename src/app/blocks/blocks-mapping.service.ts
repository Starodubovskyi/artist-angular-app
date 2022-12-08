import {Injectable} from '@angular/core';
import {BlockTypes} from "./block-types";
import {TextBlockComponent} from "./text-block/text-block.component";
import {ImageBlockComponent} from "./image-block/image-block.component";
import {Block} from "./block.interface";
import {BlogBlockV1Component} from "./blog-block-v1/blog-block-v1.component";
import {BlogBlockV2Component} from "./blog-block-v2/blog-block-v2.component";
import {BlogBlockV3Component} from "./blog-block-v3/blog-block-v3.component";
import {BlogBlockV4Component} from "./blog-block-v4/blog-block-v4.component";
import {BlogBlockV5Component} from "./blog-block-v5/blog-block-v5.component";
import {ContactBlockV1Component} from "./contact-block-v1/contact-block-v1.component";
import {ContentBlockV1Component} from "./content-block-v1/content-block-v1.component";
import {ContentBlockV2Component} from "./content-block-v2/content-block-v2.component";
import {ContentBlockV3Component} from "./content-block-v3/content-block-v3.component";
import {ContentBlockV4Component} from "./content-block-v4/content-block-v4.component";
import {ContentBlockV5Component} from "./content-block-v5/content-block-v5.component";
import {FeatureBlockV1Component} from "./feature-block-v1/feature-block-v1.component";
import {FeatureBlockV2Component} from "./feature-block-v2/feature-block-v2.component";
import {FeatureBlockV3Component} from "./feature-block-v3/feature-block-v3.component";
import {FeatureBlockV4Component} from "./feature-block-v4/feature-block-v4.component";
import {FeatureBlockV5Component} from "./feature-block-v5/feature-block-v5.component";
import {FeatureBlockV6Component} from "./feature-block-v6/feature-block-v6.component";
import {GalleryBlockV1Component} from "./gallery-block-v1/gallery-block-v1.component";
import {GalleryBlockV2Component} from "./gallery-block-v2/gallery-block-v2.component";
import {GalleryBlockV3Component} from "./gallery-block-v3/gallery-block-v3.component";
import {HeroBlockV1Component} from "./hero-block-v1/hero-block-v1.component";
import {HeroBlockV2Component} from "./hero-block-v2/hero-block-v2.component";
import {HeroBlockV3Component} from "./hero-block-v3/hero-block-v3.component";
import {StepBlockV1Component} from "./step-block-v1/step-block-v1.component";
import {StepBlockV2Component} from "./step-block-v2/step-block-v2.component";
import {TeamBlockV1Component} from "./team-block-v1/team-block-v1.component";
import {TeamBlockV2Component} from "./team-block-v2/team-block-v2.component";
import {TestimonialsBlockV1Component} from "./testimonials-block-v1/testimonials-block-v1.component";
import {TestimonialsBlockV2Component} from "./testimonials-block-v2/testimonials-block-v2.component";
import {TestimonialsBlockV3Component} from "./testimonials-block-v3/testimonials-block-v3.component";
import {ContentBlockV6Component} from "./content-block-v6/content-block-v6.component";
import {HeroImageFullBlockComponent} from "./hero-image-full-block/hero-image-full-block.component";

@Injectable({
  providedIn: 'root'
})
export class BlocksMappingService {

  constructor() {
  }

  public mapBlocksToComponents(blocks: Block[]) {
    return blocks.map((block: Block) => {
      return {
        ...block,
        component: this.componentFinder(block.type)
      }
    });
  }

  private componentFinder(blockType: BlockTypes) {
    switch (blockType) {
      case BlockTypes.TEXT:
        return TextBlockComponent;
      case BlockTypes.IMAGE:
        return ImageBlockComponent;
      case BlockTypes.BLOG_V1:
        return BlogBlockV1Component;
      case BlockTypes.BLOG_V2:
        return BlogBlockV2Component;
      case BlockTypes.BLOG_V3:
        return BlogBlockV3Component;
      case BlockTypes.BLOG_V4:
        return BlogBlockV4Component;
      case BlockTypes.BLOG_V5:
        return BlogBlockV5Component;
      case BlockTypes.CONTACT_V1:
        return ContactBlockV1Component;
      case BlockTypes.CONTENT_V1:
        return ContentBlockV1Component;
      case BlockTypes.CONTENT_V2:
        return ContentBlockV2Component;
      case BlockTypes.CONTENT_V3:
        return ContentBlockV3Component;
      case BlockTypes.CONTENT_V4:
        return ContentBlockV4Component;
      case BlockTypes.CONTENT_V5:
        return ContentBlockV5Component;
      case BlockTypes.CONTENT_V6:
        return ContentBlockV6Component;
      case BlockTypes.FEATURE_V1:
        return FeatureBlockV1Component;
      case BlockTypes.FEATURE_V2:
        return FeatureBlockV2Component;
      case BlockTypes.FEATURE_V3:
        return FeatureBlockV3Component;
      case BlockTypes.FEATURE_V4:
        return FeatureBlockV4Component;
      case BlockTypes.FEATURE_V5:
        return FeatureBlockV5Component;
      case BlockTypes.FEATURE_V6:
        return FeatureBlockV6Component;
      case BlockTypes.GALLERY_V1:
        return GalleryBlockV1Component;
      case BlockTypes.GALLERY_V2:
        return GalleryBlockV2Component;
      case BlockTypes.GALLERY_V3:
        return GalleryBlockV3Component;
      case BlockTypes.HERO_V1:
        return HeroBlockV1Component;
      case BlockTypes.HERO_V2:
        return HeroBlockV2Component;
      case BlockTypes.HERO_V3:
        return HeroBlockV3Component;
      case BlockTypes.HERO_IMAGE_FULL:
        return HeroImageFullBlockComponent;
      case BlockTypes.STEP_V1:
        return StepBlockV1Component;
      case BlockTypes.STEP_V2:
        return StepBlockV2Component;
      case BlockTypes.TEAM_V1:
        return TeamBlockV1Component;
      case BlockTypes.TEAM_V2:
        return TeamBlockV2Component;
      case BlockTypes.TESTIMONIALS_V1:
        return TestimonialsBlockV1Component;
      case BlockTypes.TESTIMONIALS_V2:
        return TestimonialsBlockV2Component;
      case BlockTypes.TESTIMONIALS_V3:
        return TestimonialsBlockV3Component;
      default:
        return TextBlockComponent;
    }
  }
}
