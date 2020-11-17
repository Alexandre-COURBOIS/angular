import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DeviceService} from '../services/device.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  defaultOnOff = 'eteint';

  constructor(private deviceService: DeviceService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const value = form.value['status'];

    if (name.length === 0) {
      alert('Write a name please');
    } else if (name.length <= 2) {
      alert('Write a valid name please');
    } else {
      this.deviceService.addDevice(name, status);
      this.router.navigate(['/devices']);
    }
  }

}
