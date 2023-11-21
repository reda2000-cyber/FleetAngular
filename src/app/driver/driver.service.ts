import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { VehicleService } from '../vehicle/vehicle.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  drivers : Driver[] = [
    new Driver(0,"reda", "sm", this.vehicleService.getVehicles()[0], "assets/Drivers/driver0.png"),
    new Driver(1,"moha", "mm", this.vehicleService.getVehicles()[1], "assets/Drivers/driver1.png"),
    new Driver(2,"karim", "rm",this.vehicleService.getVehicles()[2], "assets/Drivers/driver2.png")
  ]

  driverSelected = new Subject<Driver>();

  constructor(private vehicleService : VehicleService) { }

  getDrivers(): Driver[]{
    return this.drivers;
  }

  getDriverById(id: number): Driver{
    return  this.drivers[id];
  }

  saveDriver(driver: Driver){
    this.drivers.push(driver);
  }
}
