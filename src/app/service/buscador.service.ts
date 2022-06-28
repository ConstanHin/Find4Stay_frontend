import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelService } from './hotel.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class BuscadorService {

  apiUrl: string = environment.SERVER_URL + "/api/hoteles/ciudad";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  datosBusqueda: any = {}

  constructor(private hotelService: HotelService) { }

  getDatosBusqueda(){
    return this.datosBusqueda;
  }

  setDatosBusqueda(datos: any) {
    this.datosBusqueda = datos;
  }


}
