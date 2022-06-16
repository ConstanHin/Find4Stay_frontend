import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  role: string = "cliente";

  constructor() {
   }

   getRole(){
    return this.role
   }
}
