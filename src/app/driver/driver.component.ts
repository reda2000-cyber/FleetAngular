import { Component } from '@angular/core';
import { Driver } from './driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  driver !: Driver;

}
