import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area/area.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLoggedIn: boolean = false;

  constructor(private areaService: AreaService) { }


  ngOnInit(): void {
  }

  changeRoleArea(role: string) {
    this.areaService.setRoleArea(role)
  }

}
