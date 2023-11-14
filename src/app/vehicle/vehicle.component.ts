import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {


  dataSource!: MatTableDataSource<Vehicle>;
  displayedColumns: string[] = ['id', 'matricule', 'brand', 'currentKm'];



  constructor(private vehicleService : VehicleService) { }
  

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehicleService.getVehicles());
  }
}
