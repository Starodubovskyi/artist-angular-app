import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from "./page/page.component";
import {BiographyComponent} from "./biography/biography.component";
import {LayoutComponent} from "./layout/layout.component";
import {OperasComponent} from "./operas/operas.component";
import {OperaComponent} from "./opera/opera.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'biography',
        component: BiographyComponent
      },
      {
        path: 'operas',
        component: OperasComponent
      },
      {
        path: 'opera/:id',
        component: OperaComponent
      },
      {
        path: '**',
        component: PageComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
