import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDialogComponent } from './vehicle-dialog/vehicle-dialog.component';
import { VehicleComponent } from './vehicle.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    VehicleComponent,
    VehicleDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VehicleComponent
  ]
})
export class VehicleModule { }
