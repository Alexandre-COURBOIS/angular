import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DeviceService {

  deviceSubject = new Subject<any[]>();

  private devices = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'eteint'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];

  constructor(private httpClient: HttpClient) {
  }

  emitDeviceSubject() {
    this.deviceSubject.next(this.devices.slice());
  }

  getDeviceById(id: number) {
    const device = this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
    return device;
  }

  switchOnAll() {
    for (let device of this.devices) {
      device.status = "allumé"
    }
    this.emitDeviceSubject();
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = "eteint"
    }
    this.emitDeviceSubject();
  }

  switchOnOne(index: number) {
    this.devices[index].status = "allumé"
    this.emitDeviceSubject();
  }

  switchOffOne(index: number) {
    this.devices[index].status = "eteint"
    this.emitDeviceSubject();
  }

  addDevice(name: string, status: string) {
    const deviceObject = {
      id: 0,
      name: '',
      status: ''
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[(this.devices.length -1)].id + 1;

    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }

  saveDeviceOnDatabase() {

    this.httpClient.put('https://angularfirstproject-37709.firebaseio.com/devices.json', this.devices).subscribe(
      () => {
        console.log("Successfull register on database");
      },
      (error) => {
        console.log("Error on save " +error);
      }
    );
  }

  getDatabaseDevice() {
    this.httpClient.get<any[]>('https://angularfirstproject-37709.firebaseio.com/devices.json').subscribe(
      (response) => {
        this.devices = response;
        this.emitDeviceSubject();
      },
      (error) => {
        console.log('error on loading ' + error);
      }
    )
  }

}
