import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  {
    path: 'login',
    title: 'Login Page',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
