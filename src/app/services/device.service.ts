export class DeviceService {

  devices = [
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
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = "eteint"
    }
  }

  switchOnOne(index: number) {
    this.devices[index].status = "allumé"
  }

  switchOffOne(index: number) {
    this.devices[index].status = "eteint"
  }


}
