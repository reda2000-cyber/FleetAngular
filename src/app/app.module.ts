import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverItemComponent } from './driver/driver-item/driver-item.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDialogComponent } from './vehicle/vehicle-dialog/vehicle-dialog.component';
import { ShadowDirective } from './utils/shadow.directive';
import { FirstNamePipe } from './utils/first-name.pipe';
import { DriverModule } from './driver/driver.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AuthComponent } from './auth/auth.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DriverModule,
    VehicleModule,
    SharedModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
