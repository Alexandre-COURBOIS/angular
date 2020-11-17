import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import {AuthService} from './services/auth.service';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { Page404Component } from './page404/page404.component';
import {AuthGuardService} from './services/auth-guard.service';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    Page404Component,
    EditDeviceComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DeviceService,
    AuthService,
    AuthGuardService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

