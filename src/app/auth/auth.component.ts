import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLoginMode = true;
  errorMsg !: string;

  constructor(private authService : AuthService, private router : Router){}

  onSwitchMode(): void{
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm): void {

    let observable : Observable<AuthResponseData>;

    if(this.isLoginMode){
      observable = this.authService.login(authForm.value.email, authForm.value.password);
    }else{
      observable = this.authService.signUp(authForm.value.email, authForm.value.password);
    }

    observable.subscribe(data => this.router.navigate(["/drivers"]),
    error => this.errorMsg = error.error);
  }

}
