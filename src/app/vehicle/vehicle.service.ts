import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  path : string = environment.api+"/vehicles";

  vehicleChanged = new Subject<void>();

  constructor(private http : HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.path);
  }

  getVehicleById(id : number): Observable<Vehicle>{
    return this.http.get<Vehicle>(`${this.path}/${id}`);
  }

  saveVehicle(vehicle : Vehicle): Observable<Vehicle>{
    if(vehicle.id != undefined){
      return this.http.patch<Vehicle>(this.path, vehicle);
    }else{
      return this.http.post<Vehicle>(this.path, vehicle);
    }
  }
}
