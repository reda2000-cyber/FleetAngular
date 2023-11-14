import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles : Vehicle[] = [
    new Vehicle(0, "Mercedes", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "Tesla", 990, "F86D2210")
  ]

  dataSource!: MatTableDataSource<Vehicle>;
  displayedColumns: string[] = ['id', 'matricule', 'brand', 'currentKm'];



  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehicles);
  }
}
