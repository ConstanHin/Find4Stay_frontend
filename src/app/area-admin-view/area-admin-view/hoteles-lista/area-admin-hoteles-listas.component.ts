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
    {nombre: "NH", categoria: 3, poblacion: "Reus", ubicacion: "41.1444,1.1106272", precio: "50€"},

  ]
  page: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
