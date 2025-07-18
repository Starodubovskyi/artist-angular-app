import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageEditComponent} from "./pages/page-edit/page-edit.component";
import {PageListingComponent} from "./pages/page-listing/page-listing.component";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
// import {PageCreateComponent} from "./pages/page-create/page-create.component";
import {PageBlockEditComponent} from "./pages/page-block-edit/page-block-edit.component";
import {MenuListingComponent} from "./menus/menu-listing/menu-listing.component";
import {MenuCreateComponent} from "./menus/menu-create/menu-create.component";
import {MenuEditComponent} from "./menus/menu-edit/menu-edit.component";
import {ThemeEditComponent} from "./theme-edit/theme-edit.component";
import {CustomBlocksListComponent} from "./custom-blocks/custom-blocks-list/custom-blocks-list.component";
import {CustomBlocksCreateComponent} from "./custom-blocks/custom-blocks-create/custom-blocks-create.component";
import {CustomBlocksEditComponent} from "./custom-blocks/custom-blocks-edit/custom-blocks-edit.component";
import {CustomBlocksDesignComponent} from "./custom-blocks/custom-blocks-design/custom-blocks-design.component";
import {ManageTagsComponent} from "./manage-tags/manage-tags.component";
import {NewPageListComponent} from "./page/new-page-list/new-page-list.component";
import {NewPageCreateComponent} from "./page/new-page-create/new-page-create.component";
import {NewPageEditComponent} from "./page/new-page-edit/new-page-edit.component";

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      // {
      //   title: 'Page create',
      //   path: 'sections/create',
      //   component: PageCreateComponent
      // },
      // {
      //   title: 'Page edit',
      //   path: 'sections/:id/edit',
      //   component: PageEditComponent
      // },
      // {
      //   title: 'Pages listing',
      //   path: 'sections',
      //   component: PageListingComponent
      // },
      {
        title: 'Menus listing',
        path: 'menus',
        component: MenuListingComponent
      },
      {
        title: 'Menus create',
        path: 'menus/create',
        component: MenuCreateComponent
      },
      {
        title: 'Menus edit',
        path: 'menus/:id/edit',
        component: MenuEditComponent
      },
      {
        title: 'Page listing',
        path: 'pages',
        component: NewPageListComponent
      },
      {
        title: 'Page create',
        path: 'pages/create',
        component: NewPageCreateComponent
      },
      {
        title: 'Page edit',
        path: 'pages/:id/edit',
        component: NewPageEditComponent
      },
      {
        title: 'Theme',
        path: 'theme',
        component: ThemeEditComponent
      },
      {
        title: 'Custom blocks',
        path: 'custom-blocks',
        component: CustomBlocksListComponent
      },
      {
        title: 'Custom blocks create',
        path: 'custom-blocks/create',
        component: CustomBlocksCreateComponent
      },
      {
        title: 'Custom blocks edit',
        path: 'custom-blocks/:id/edit',
        component: CustomBlocksEditComponent
      },
      {
        title: 'Manage Tags',
        path: 'manage-tags',
        component: ManageTagsComponent
      },
    ]
  },
  {
    title: 'Page block edit',
    path: 'sections/:id/design',
    component: PageBlockEditComponent
  },
  {
    title: 'Custom blocks design',
    path: 'custom-blocks/:id/design',
    component: CustomBlocksDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
