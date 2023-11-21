import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit{

  @Input() driver !: Driver;
  id!: number;
  editMode: boolean = false;
  vehicles : Vehicle[] = this.vehicleService.getVehicles();
  

  constructor(private vehicleService : VehicleService, 
    private activatedRoute: ActivatedRoute, 
    private driverService: DriverService,
    private router: Router) { }

    ngOnInit(): void {
      this.id =+ this.activatedRoute.snapshot.params["id"];
      this.editMode = this.id != null && !isNaN(this.id);
      if(!this.editMode){
        this.driver = new Driver();
        this.driver.vehicle = new Vehicle();
      }else{
        this.driver = this.driverService.getDriverById(this.id);
      }
    }

    saveDriver(){
      this.driverService.saveDriver(this.driver);
      this.router.navigate(["/drivers"]);
    }

  
  
  
}
