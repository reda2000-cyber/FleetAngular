import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fleet';

  accPage : string = "drivers";


  onPageSelected(page : string){
    this.accPage = page; 
  }
}
