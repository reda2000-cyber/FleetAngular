import { Component, EventEmitter, Output } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { DriverService } from '../driver.service';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {

  @Output() driverSelected = new EventEmitter<Driver>();
  drivers : Driver[] = this.driverService.getDrivers();

  constructor(private vehicleService : VehicleService, private driverService :  DriverService) { }


  onDriverSelected(driver : Driver){
    this.driverSelected.emit(driver);
  }
}
