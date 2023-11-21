import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { VehicleService } from '../vehicle/vehicle.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  drivers : Driver[] = [
    
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

    if(driver.id != undefined){
      this.drivers[driver.id]= driver;
    }else{
      driver.id = this.drivers.length;
      this.drivers.push(driver);
    }
  }
}
