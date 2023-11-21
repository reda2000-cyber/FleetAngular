import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAuthenticated = false;

  constructor(private authservice : AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authservice.userSubject.subscribe((user) => this.isAuthenticated = !user ? false : true);
  }
  onLogout()
  {
    this.authservice.logout()
    this.router.navigate(["/login"])
  }
}
