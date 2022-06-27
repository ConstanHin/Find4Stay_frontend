import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hotel } from '../models/hotel';
import { HotelService } from './hotel.service';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  apiUrl: string = "http://localhost:8080/api/hoteles/ciudad";
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
