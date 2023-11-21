import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleService } from './vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { VehicleDialogComponent } from './vehicle-dialog/vehicle-dialog.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {


  dataSource!: MatTableDataSource<Vehicle>;
  displayedColumns: string[] = ['id', 'matricule', 'brand', 'currentKm'];



  constructor(private vehicleService : VehicleService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehicleService.getVehicles());
    this.vehicleService.vehicleChanged.subscribe(() =>
      this.dataSource = new MatTableDataSource(this.vehicleService.getVehicles())
    );
  }

  openDialog(): void {
    this.dialog.open(VehicleDialogComponent, {
      data: new Vehicle(),
    });
  }

  updateVehicle(id : number): void {
    this.dialog.open(VehicleDialogComponent, {
      data: this.vehicleService.getVehicleById(id),
    });
  }
}
