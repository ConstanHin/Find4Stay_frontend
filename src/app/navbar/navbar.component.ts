import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from '../area/area.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isAuth: boolean = false;
  username: string| undefined;

  constructor(
    private areaService: AreaService,
    private authService: AuthService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    // Check if auth in sessionStorage and set auth status
    const sessionUsername = window.sessionStorage.getItem("auth-username")
    if (sessionUsername) {
      this.authService.setAuthenticated(true)
      this.username = sessionUsername;
    }

    // On route change check if user is authenticated
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.isAuth = this.authService.isAuthenticated()
        if (this.authService.getUsername()) {
          this.username = this.authService.getUsername();
        }
      }
    })
  }


  changeRoleArea(role: string) {
    this.areaService.setRoleArea(role)
  }

  logOut() {
    this.authService.logout();
    this.isAuth = false;
    this.username = undefined;
    this.router.navigate(['/'])
  }

}
