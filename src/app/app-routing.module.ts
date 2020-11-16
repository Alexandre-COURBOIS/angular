import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceViewComponent} from './device-view/device-view.component';
import {AuthComponent} from './auth/auth.component';
import {SingleDeviceComponent} from './single-device/single-device.component';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
  {path: 'devices', component: DeviceViewComponent},
  {path: 'devices/:id', component: SingleDeviceComponent},
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
