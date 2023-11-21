import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../driver.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit{

  driver !: Driver;
  id!: number;
  editMode: boolean = false;
  vehicles !: Vehicle[] ;

  driverForm !: FormGroup;
  imgSrc !: string;
  oldPath !: string;
  selectedImg !: any;
  

  constructor(private vehicleService : VehicleService, 
    private activatedRoute: ActivatedRoute, 
    private driverService: DriverService,
    private router: Router,
    private storage : AngularFireStorage) { }

    ngOnInit(): void {
      this.vehicles = this.vehicleService.getVehicles();
      this.id =+ this.activatedRoute.snapshot.params["id"];
      this.editMode = this.id != null && !isNaN(this.id);
      this.initForm();
    }

    saveDriver(){
      this.driver = this.driverForm.value;
      if(this.editMode){
        this.driver.id = this.id;
      }

      if(this.selectedImg){
        const namePart = this.selectedImg.name.split(".");
        let photoName : string;

        if(this.editMode){
          photoName = `Images/driver${this.id}.${namePart[namePart.length-1]}`;
        }else{
          photoName = `Images/driver${this.driverService.getDrivers().length}.namePart[namePart.length-1]`;
        }

        const ref = this.storage.ref(photoName);
        this.storage.upload(photoName, this.selectedImg).snapshotChanges()
        .pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe( url => {
              this.driver.photo = photoName;
              this.driverService.saveDriver(this.driver);
              this.driverService.driverSelected.next(this.driver);
              this.router.navigate(["/drivers"]);
            })
          })
          )
        .subscribe();

      }else{
        this.driver.photo = this.oldPath;
        this.driverService.saveDriver(this.driver);
        this.driverService.driverSelected.next(this.driver);
        this.router.navigate(["/drivers"]);
      }
    }

    initForm(){

      let firstName ="", lastName ="", vehicle;

      if(this.editMode){

        this.driver = this.driverService.getDriverById(this.id);
        firstName = this.driver.firstName!;
        lastName = this.driver.lastName!;
        vehicle =  this.driver.vehicle!;

        const imgRef = this.storage.ref(this.driver.photo!);
        imgRef.getDownloadURL().subscribe(url => this.imgSrc = url);

        this.oldPath = this.driver.photo!;

      }

      this.driverForm = new FormGroup({
        firstName : new FormControl(firstName, Validators.required),
        lastName : new FormControl(lastName, Validators.required),
        vehicle : new FormControl(vehicle)
      });

      this.imgSrc = "assets/placeholder.png";
      this.selectedImg = null;
    }

    showPrev(file : any){
      if(file.target.files && file.target.files[0]){
        const reader = new FileReader();
        reader.onload = (e : any) =>{
          this.imgSrc = e.target?.result!;
        }
        reader.readAsDataURL(file.target.files[0]);
        this.selectedImg = file.target.files[0];


      }else{
        this.imgSrc = "assets/placeholder.png";
        this.selectedImg = null;
      }
    }

}
