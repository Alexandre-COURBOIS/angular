import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName!: string;
  @Input() deviceStatus!: string;
  @Input() indexOfDevice!: number;
  @Input() id!: number;

  constructor(private deviceSerivce: DeviceService) {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  getStatusDevice() {
    if (this.deviceStatus === "allumé") {
      return false;
    } else if (this.deviceStatus === "eteint") {
      return true;
    }
  }

  // @ts-ignore
  getColor() {
    if(this.deviceStatus === "allumé") {
      return "green";
    } else if (this.deviceStatus === "eteint") {
      return "red";
    }
  }

  onSwitchOnOne() {
    this.deviceSerivce.switchOnOne(this.indexOfDevice)
  }

  onSwitchOffOne() {
    this.deviceSerivce.switchOffOne(this.indexOfDevice)
  }

  getStatus() {
    return this.deviceStatus;
  }
}
