import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles : Vehicle[] = [
    new Vehicle(0, "Mercedes", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "Tesla", 990, "F86D2210")
  ]

  vehicleChanged = new Subject<void>();

  constructor() { }

  getVehicles(): Vehicle[]{
    return this.vehicles;
  }

  getVehicleById(id : number): Vehicle{
    return this.vehicles[id];
  }

  saveVehicle(vehicle : Vehicle){
    if(vehicle.id != undefined){
      this.vehicles[vehicle.id]= vehicle;
    }else{
      vehicle.id = this.vehicles.length;
      this.vehicles.push(vehicle);
    }
  }
}
