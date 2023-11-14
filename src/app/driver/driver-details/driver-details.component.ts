import { Component } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent {

  vehicles : Vehicle[] = [
    new Vehicle(0, "Mercedes", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "Tesla", 990, "F86D2210")
  ]
  
}
