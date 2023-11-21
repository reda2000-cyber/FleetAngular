import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit{


  @Input() driver !: Driver;  
  imgSrc !: string;

  constructor(private sanitizer: DomSanitizer, 
    private driverService: DriverService,
    private router: Router,
    private storage : AngularFireStorage) { }


  ngOnInit(): void {
    const imgRef = this.storage.ref(this.driver.photo!);
    imgRef.getDownloadURL().subscribe(url => this.imgSrc = url);
  }

  getImgContent(img: string | undefined): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  onShow(){
    this.driverService.driverSelected.next(this.driver);
    this.router.navigate(["/drivers", this.driver.id]);
  }


}
