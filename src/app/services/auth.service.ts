import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { User } from '../user';

export interface AuthResponseData {
  accessToken:	string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject = new BehaviorSubject<User | any>(null);

  constructor(private http: HttpClient) {}

  signUp(emailUsr: string, passwordUsr: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('http://localhost:3000/register',
      {
        email: emailUsr,
        password: passwordUsr
      }).pipe(
        tap((data) => {
          const user = new User( emailUsr, data.accessToken);
          this.userSubject.next(user);
          localStorage.setItem("user",JSON.stringify(user));
        })
      );
  }

  login(emailUsr: string, passwordUsr: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('http://localhost:3000/login',
      {
        email: emailUsr,
        password: passwordUsr
      }).pipe(
        tap((data) => {
          const user = new User( emailUsr, data.accessToken);
          this.userSubject.next(user);
          localStorage.setItem("user",JSON.stringify(user));
        })
      );
  }

  logout(){
    this.userSubject.next(null);
    localStorage.removeItem("user");
  }

  autoLogin(){
    let user=JSON.parse(localStorage.getItem("user")!)
    if(user)
    {
      this.userSubject.next(user);
    }
  }
}
