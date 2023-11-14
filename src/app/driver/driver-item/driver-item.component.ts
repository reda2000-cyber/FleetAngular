import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Driver } from '../driver';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent {


  @Input() driver !: Driver;
  @Output() driverSelected = new EventEmitter<void>();
  

  constructor(private sanitizer: DomSanitizer) { }

  getImgContent(img: string | undefined): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  onShow(){
    this.driverSelected.emit();
  }


}
