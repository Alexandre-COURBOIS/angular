import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})
export class DeviceViewComponent implements OnInit {


  isAuth = false;

  // @ts-ignore
  devices: any[];

  constructor(private deviceService : DeviceService) {

    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  ngOnInit() {
    this.devices = this.deviceService.devices
  }

  onSwitchOn() {
    this.deviceService.switchOnAll()
  }

  onSwitchOff() {
    this.deviceService.switchOffAll()
  }

}
