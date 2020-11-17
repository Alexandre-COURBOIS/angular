import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})
export class DeviceViewComponent implements OnInit {


  isAuth = false;

  devices!: any[];
  deviceSubscription!: Subscription;

  constructor(private deviceService : DeviceService) {

    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  ngOnInit() {
    this.deviceSubscription = this.deviceService.deviceSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();
  }

  onSwitchOn() {
    this.deviceService.switchOnAll()
  }

  onSwitchOff() {
    this.deviceService.switchOffAll()
  }

  onDatabaseSave() {
    this.deviceService.saveDeviceOnDatabase();
  }

  getDeviceOnDatabase(){
  this.deviceService.getDatabaseDevice()
  }
}
