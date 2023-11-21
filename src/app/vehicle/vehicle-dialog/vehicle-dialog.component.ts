import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from '../vehicle';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit, AfterViewInit{

  @ViewChild("form") vehicleForm !: NgForm;
  vehicle : Vehicle;
  editMode : boolean = false;

  constructor(  public dialogRef: MatDialogRef<VehicleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vehicle, private vehicleService : VehicleService){
      this.vehicle = data;
    }

  ngAfterViewInit(): void {
    if(this.vehicle.id != undefined){
      this.editMode = true;
   setTimeout(() => {
    this.vehicleForm.setValue({
        registartionNumber : this.vehicle.matricule,
        brand : this.vehicle.brand,
        currentKm : this.vehicle.currentKm
      });
   })   
    }else{
      this.editMode = false;
    }  }

  ngOnInit(): void {
  }



  onSave(){

    this.vehicle.brand = this.vehicleForm.value.brand;
    this.vehicle.currentKm = this.vehicleForm.value.currentKm;
    this.vehicle.matricule = this.vehicleForm.value.registartionNumber;

    this.vehicleService.saveVehicle(this.vehicle).subscribe(() =>{
      this.vehicleService.vehicleChanged.next();
    this.dialogRef.close();
    });
    
  }

}
