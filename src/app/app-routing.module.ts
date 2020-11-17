import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceViewComponent} from './device-view/device-view.component';
import {AuthComponent} from './auth/auth.component';
import {SingleDeviceComponent} from './single-device/single-device.component';
import {Page404Component} from './page404/page404.component';
import {AuthGuardService} from './services/auth-guard.service';
import {EditDeviceComponent} from './edit-device/edit-device.component';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';

// Création des routes ci dessous.
const routes: Routes = [
  {path: 'devices',canActivate: [AuthGuardService], component: DeviceViewComponent},
  // exemple de route avec un passage de paramètre ci dessous.
  {path: 'devices/:id',canActivate: [AuthGuardService], component: SingleDeviceComponent},
  {path: 'edit', canActivate: [AuthGuardService], component: EditDeviceComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'users', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: '', component: DeviceViewComponent},
  {path: 'not-found', component: Page404Component},
  //Doit être en derniere position permet de rediriger vers la 404 si la page recherché dans l'url n'éxiste pas.
  {path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
