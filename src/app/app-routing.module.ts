import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceViewComponent} from './device-view/device-view.component';
import {AuthComponent} from './auth/auth.component';
import {SingleDeviceComponent} from './single-device/single-device.component';
import {Page404Component} from './page404/page404.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: 'devices',canActivate: [AuthGuardService], component: DeviceViewComponent},
  {path: 'devices/:id',canActivate: [AuthGuardService], component: SingleDeviceComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: DeviceViewComponent},
  {path: 'not-found', component: Page404Component},
  {path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
