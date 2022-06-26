import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
@Component({
  selector: 'app-resultado-busqueda-hoteles-view',
  templateUrl: './resultado-busqueda-hoteles-view.component.html',
  styleUrls: ['./resultado-busqueda-hoteles-view.component.css']
})
export class ResultadoBusquedaHotelesViewComponent implements OnInit {

  listHoteles: Hotel[] = [{nombre: "H10 Marina Barcelona", categoria: 3, id:1, poblacion: "Reus", precio: 113,ubicacion:"a"}]

  ngOnInit(): void {
  }

}
