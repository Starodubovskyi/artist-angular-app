import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageEditComponent} from "./pages/page-edit/page-edit.component";
import {PageListingComponent} from "./pages/page-listing/page-listing.component";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {PageCreateComponent} from "./pages/page-create/page-create.component";
import {PageBlockEditComponent} from "./pages/page-block-edit/page-block-edit.component";
import {MenuListingComponent} from "./menus/menu-listing/menu-listing.component";
import {MenuCreateComponent} from "./menus/menu-create/menu-create.component";
import {MenuEditComponent} from "./menus/menu-edit/menu-edit.component";
import {ThemeEditComponent} from "./theme-edit/theme-edit.component";

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        title: 'Page create',
        path: 'pages/create',
        component: PageCreateComponent
      },
      {
        title: 'Page edit',
        path: 'pages/:id/edit',
        component: PageEditComponent
      },
      {
        title: 'Pages listing',
        path: 'pages',
        component: PageListingComponent
      },
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
        title: 'Theme',
        path: 'theme',
        component: ThemeEditComponent
      }
    ]
  },
  {
    title: 'Page block edit',
    path: 'pages/:id/design',
    component: PageBlockEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
