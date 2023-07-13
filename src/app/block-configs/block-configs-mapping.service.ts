import {Injectable} from '@angular/core';
import {BlockTypes} from "../blocks/block-types";
import {TextBlockConfigComponent} from "./config-components/text-block-config/text-block-config.component";
import {BlogV1ConfigComponent} from "./config-components/blog-v1-config/blog-v1-config.component";
import {BlogV2ConfigComponent} from "./config-components/blog-v2-config/blog-v2-config.component";
import {BlogV3ConfigComponent} from "./config-components/blog-v3-config/blog-v3-config.component";
import {BlogV4ConfigComponent} from "./config-components/blog-v4-config/blog-v4-config.component";
import {BlogV5ConfigComponent} from "./config-components/blog-v5-config/blog-v5-config.component";
import {ContactV1ConfigComponent} from "./config-components/contact-v1-config/contact-v1-config.component";
import {ContentV1ConfigComponent} from "./config-components/content-v1-config/content-v1-config.component";
import {ContentV2ConfigComponent} from "./config-components/content-v2-config/content-v2-config.component";
import {ContentV3ConfigComponent} from "./config-components/content-v3-config/content-v3-config.component";
import {ContentV4ConfigComponent} from "./config-components/content-v4-config/content-v4-config.component";
import {ContentV5ConfigComponent} from "./config-components/content-v5-config/content-v5-config.component";
import {FeatureV1ConfigComponent} from "./config-components/feature-v1-config/feature-v1-config.component";
import {FeatureV2ConfigComponent} from "./config-components/feature-v2-config/feature-v2-config.component";
import {FeatureV3ConfigComponent} from "./config-components/feature-v3-config/feature-v3-config.component";
import {FeatureV4ConfigComponent} from "./config-components/feature-v4-config/feature-v4-config.component";
import {FeatureV5ConfigComponent} from "./config-components/feature-v5-config/feature-v5-config.component";
import {FeatureV6ConfigComponent} from "./config-components/feature-v6-config/feature-v6-config.component";
import {GalleryV1ConfigComponent} from "./config-components/gallery-v1-config/gallery-v1-config.component";
import {GalleryV2ConfigComponent} from "./config-components/gallery-v2-config/gallery-v2-config.component";
import {GalleryV3ConfigComponent} from "./config-components/gallery-v3-config/gallery-v3-config.component";
import {HeroV1ConfigComponent} from "./config-components/hero-v1-config/hero-v1-config.component";
import {HeroV2ConfigComponent} from "./config-components/hero-v2-config/hero-v2-config.component";
import {HeroV3ConfigComponent} from "./config-components/hero-v3-config/hero-v3-config.component";
import {StepV1ConfigComponent} from "./config-components/step-v1-config/step-v1-config.component";
import {StepV2ConfigComponent} from "./config-components/step-v2-config/step-v2-config.component";
import {TeamV1ConfigComponent} from "./config-components/team-v1-config/team-v1-config.component";
import {TeamV2ConfigComponent} from "./config-components/team-v2-config/team-v2-config.component";
import {TestimonialsV1ConfigComponent} from "./config-components/testimonials-v1-config/testimonials-v1-config.component";
import {TestimonialsV2ConfigComponent} from "./config-components/testimonials-v2-config/testimonials-v2-config.component";
import {TestimonialsV3ConfigComponent} from "./config-components/testimonials-v3-config/testimonials-v3-config.component";
import {ContentV6ConfigComponent} from "./config-components/content-v6-config/content-v6-config.component";
import {
  HeroImageFullConfigComponent
} from "./config-components/hero-image-full-config/hero-image-full-config.component";
import {ImageBlockConfigComponent} from "./config-components/image-block-config/image-block-config.component";
import {ContentV7ConfigComponent} from "./config-components/content-v7-config/content-v7-config.component";
import {SocialV1ConfigComponent} from "./config-components/social-v1-config/social-v1-config.component";
import {CarouselV1ConfigComponent} from "./config-components/carousel-v1-config/carousel-v1-config.component";

@Injectable({
  providedIn: 'root'
})
export class BlockConfigsMappingService {

  constructor() {
  }

  public getComponent(blockType: BlockTypes | undefined) {
    const configDefinition = this.componentFinder(blockType);
    return {
      component: this.componentFinder(blockType),
      ...configDefinition.config
    };
  }

  public getConfig(blockType: BlockTypes | undefined) {
    return this.componentFinder(blockType).config;
  }

  private componentFinder(blockType: BlockTypes | undefined) {
    switch (blockType) {
      case BlockTypes.TEXT:
        return TextBlockConfigComponent;
      case BlockTypes.BLOG_V1:
        return BlogV1ConfigComponent;
      case BlockTypes.BLOG_V2:
        return BlogV2ConfigComponent;
      case BlockTypes.BLOG_V3:
        return BlogV3ConfigComponent;
      case BlockTypes.BLOG_V4:
        return BlogV4ConfigComponent;
      case BlockTypes.BLOG_V5:
        return BlogV5ConfigComponent;
      case BlockTypes.CONTACT_V1:
        return ContactV1ConfigComponent;
      case BlockTypes.CONTENT_V1:
        return ContentV1ConfigComponent;
      case BlockTypes.CONTENT_V2:
        return ContentV2ConfigComponent;
      case BlockTypes.CONTENT_V3:
        return ContentV3ConfigComponent;
      case BlockTypes.CONTENT_V4:
        return ContentV4ConfigComponent;
      case BlockTypes.CONTENT_V5:
        return ContentV5ConfigComponent;
      case BlockTypes.CONTENT_V6:
        return ContentV6ConfigComponent;
      case BlockTypes.CONTENT_V7:
        return ContentV7ConfigComponent;
      case BlockTypes.FEATURE_V1:
        return FeatureV1ConfigComponent;
      case BlockTypes.FEATURE_V2:
        return FeatureV2ConfigComponent;
      case BlockTypes.FEATURE_V3:
        return FeatureV3ConfigComponent;
      case BlockTypes.FEATURE_V4:
        return FeatureV4ConfigComponent;
      case BlockTypes.FEATURE_V5:
        return FeatureV5ConfigComponent;
      case BlockTypes.FEATURE_V6:
        return FeatureV6ConfigComponent;
      case BlockTypes.GALLERY_V1:
        return GalleryV1ConfigComponent;
      case BlockTypes.GALLERY_V2:
        return GalleryV2ConfigComponent;
      case BlockTypes.GALLERY_V3:
        return GalleryV3ConfigComponent;
      case BlockTypes.HERO_V1:
        return HeroV1ConfigComponent;
      case BlockTypes.HERO_V2:
        return HeroV2ConfigComponent;
      case BlockTypes.HERO_V3:
        return HeroV3ConfigComponent;
      case BlockTypes.HERO_IMAGE_FULL:
        return HeroImageFullConfigComponent;
      case BlockTypes.STEP_V1:
        return StepV1ConfigComponent;
      case BlockTypes.STEP_V2:
        return StepV2ConfigComponent;
      case BlockTypes.TEAM_V1:
        return TeamV1ConfigComponent;
      case BlockTypes.TEAM_V2:
        return TeamV2ConfigComponent;
      case BlockTypes.TESTIMONIALS_V1:
        return TestimonialsV1ConfigComponent;
      case BlockTypes.TESTIMONIALS_V2:
        return TestimonialsV2ConfigComponent;
      case BlockTypes.TESTIMONIALS_V3:
        return TestimonialsV3ConfigComponent;
      case BlockTypes.SOCIAL_V1:
        return SocialV1ConfigComponent;
      case BlockTypes.CAROUSEL_V1:
        return CarouselV1ConfigComponent;
      case BlockTypes.IMAGE:
        return ImageBlockConfigComponent;
      default:
        return TextBlockConfigComponent;
    }
  }
}
