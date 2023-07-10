import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from "./page/page.component";
import {BiographyComponent} from "./biography/biography.component";
import {LayoutComponent} from "./layout/layout.component";
import {OperasComponent} from "./operas/operas.component";
import {OperaComponent} from "./opera/opera.component";
import {ExpositionsComponent} from "./expositions/expositions.component";
import {ExpositionComponent} from "./exposition/exposition.component";
import {AntologieComponent} from "./antologie/antologie.component";
import {CataloghiComponent} from "./cataloghi/cataloghi.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'biografia',
        component: BiographyComponent
      },
      {
        path: 'esposizioni',
        component: ExpositionsComponent
      },
      {
        path: 'antologie',
        component: AntologieComponent
      },
      {
        path: 'cataloghi',
        component: CataloghiComponent
      },
      {
        path: 'esposizioni/:id',
        component: ExpositionComponent
      },
      {
        path: 'opere',
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
