import { Component } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {

  vehicles : Vehicle[] = [
    new Vehicle(0, "Mercedes", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "Tesla", 990, "F86D2210")
  ]


  drivers : Driver[] = [
    new Driver(0,"Reda", "SM", this.vehicles[0], "assets/Drivers/driver0.png"),
    new Driver(1,"Moha", "MM", this.vehicles[2], "assets/Drivers/driver1.png"),
    new Driver(2,"Karim", "RM", this.vehicles[1], "assets/Drivers/driver2.png")
  ]

}
