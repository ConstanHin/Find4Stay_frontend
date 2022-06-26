import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  datosBusqueda: any = {}

  constructor() { }

  getDatosBusqueda(){
    return this.datosBusqueda;
  }

  setDatosBusqueda(datos: any) {
    this.datosBusqueda = datos;
  }
}
