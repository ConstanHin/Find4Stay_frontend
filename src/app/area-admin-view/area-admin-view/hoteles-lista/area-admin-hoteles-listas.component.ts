import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-area-admin-hoteles-listas',
  templateUrl: './area-admin-hoteles-listas.component.html',
  styleUrls: ['./area-admin-hoteles-listas.component.css']
})
export class AreaAdminHotelesListasComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  listaHoteles: Hotel[] = [
    {nombre: "NH", categoria: 3, poblacion: "Reus", ubicacion: "41.1444,1.1106272", precio: 49.99},
    {nombre: "CG", categoria: 2, poblacion: "Reus", ubicacion: "41.1590166,1.1132131", precio: 30},
    {nombre: "SB", categoria: 4, poblacion: "Tarragona", ubicacion: "41.1229899,1.234048", precio: 100},
    {nombre: "W", categoria: 5, poblacion: "Barcelona", ubicacion: "41.3926466,2.069978", precio: 500},

  ]
  page: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
