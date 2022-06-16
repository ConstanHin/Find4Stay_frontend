import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  role: string = "admin";

  constructor() {
  }

  getRoleArea() {
    return this.role;
  }

  setRoleArea(role: string) {
    this.role = role;
  }

}
