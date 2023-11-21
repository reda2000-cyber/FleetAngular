import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';



const appRoutes: Routes = [
  {path: '', redirectTo: '/drivers', pathMatch: 'full'},
  {path: 'drivers', component: DriverComponent, children: [
      {path: '', component: DriverListComponent, canActivate : [AuthGuard]},
      {path: 'new', component: DriverDetailsComponent, canActivate : [AuthGuard]},
      {path: ':id', component: DriverDetailsComponent, canActivate : [AuthGuard]}
    ]},
  {path: 'vehicles', component: VehicleComponent, canActivate : [AuthGuard]},
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
