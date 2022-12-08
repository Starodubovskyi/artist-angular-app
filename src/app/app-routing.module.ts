import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";
import {GuestGuard} from "./auth/guest.guard";

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [GuestGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./client/client.module').then((m) => m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
