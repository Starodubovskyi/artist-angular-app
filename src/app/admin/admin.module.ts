import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageEditComponent} from './pages/page-edit/page-edit.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {BuilderModule} from "../builder/builder.module";
import {PageListingComponent} from './pages/page-listing/page-listing.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {NavbarDashboardComponent} from './navbar-dashboard/navbar-dashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PageCreateComponent} from './pages/page-create/page-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageBlockEditComponent} from './pages/page-block-edit/page-block-edit.component';
import {MenuListingComponent} from './menus/menu-listing/menu-listing.component';
import {MenuCreateComponent} from './menus/menu-create/menu-create.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {MenuEditComponent} from './menus/menu-edit/menu-edit.component';
import {TreeModule} from "@circlon/angular-tree-component";
import { ThemeEditComponent } from './theme-edit/theme-edit.component';
import { CustomBlocksListComponent } from './custom-blocks/custom-blocks-list/custom-blocks-list.component';
import { CustomBlocksCreateComponent } from './custom-blocks/custom-blocks-create/custom-blocks-create.component';
import { CustomBlocksEditComponent } from './custom-blocks/custom-blocks-edit/custom-blocks-edit.component';
import { CustomBlocksDesignComponent } from './custom-blocks/custom-blocks-design/custom-blocks-design.component';

@NgModule({
  declarations: [
    PageEditComponent,
    PageListingComponent,
    AdminLayoutComponent,
    NavbarDashboardComponent,
    SidebarComponent,
    PageCreateComponent,
    PageBlockEditComponent,
    MenuListingComponent,
    MenuCreateComponent,
    MenuEditComponent,
    ThemeEditComponent,
    CustomBlocksListComponent,
    CustomBlocksCreateComponent,
    CustomBlocksEditComponent,
    CustomBlocksDesignComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BuilderModule,
    AdminRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    TreeModule
  ]
})
export class AdminModule {
}
