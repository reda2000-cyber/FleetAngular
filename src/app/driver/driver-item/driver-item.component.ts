import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent {


  @Input() driver !: Driver;  

  constructor(private sanitizer: DomSanitizer, 
    private driverService: DriverService,
    private router: Router) { }

  getImgContent(img: string | undefined): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  onShow(){
    this.driverService.driverSelected.next(this.driver);
    this.router.navigate(["/drivers", this.driver.id]);
  }


}
