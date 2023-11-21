import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.userSubject.pipe(
      take(1),
      map(user => {
          const isAuth = !user ? false : true;

          if (isAuth) {
          return true;
          }
          return this.router.createUrlTree(['/login']);
        })
      );
  }
  
}
