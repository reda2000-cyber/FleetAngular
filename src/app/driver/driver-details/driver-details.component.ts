import { Component, Input } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';
import { VehicleService } from 'src/app/vehicle/vehicle.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent {

  @Input() driver !: Driver;
  vehicles : Vehicle[] = this.vehicleService.getVehicles();
  

  constructor(private vehicleService : VehicleService) { }

  
  
  
}
