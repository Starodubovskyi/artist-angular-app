import {Directive, Input, ViewContainerRef} from '@angular/core';
import {LayoutBlock} from "./layout-block";

@Directive({
  selector: '[appLayoutRender]'
})
export class LayoutRenderDirective {

  constructor(private viewContainer: ViewContainerRef) {
  }

  @Input('appLayoutRender') set render(layoutComponent: { component: any, themeSettings: any }) {
    this.viewContainer.clear();

    const layoutRef = this.viewContainer.createComponent<LayoutBlock>(layoutComponent.component);

    layoutRef.instance.themeSettings = layoutComponent.themeSettings;
  }

}
