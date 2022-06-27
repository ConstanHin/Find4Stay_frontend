import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { BuscadorService } from 'src/app/service/buscador.service';
@Component({
  selector: 'app-resultado-busqueda-hoteles-view',
  templateUrl: './resultado-busqueda-hoteles-view.component.html',
  styleUrls: ['./resultado-busqueda-hoteles-view.component.css']
})
export class ResultadoBusquedaHotelesViewComponent implements OnInit {

  listHoteles: Hotel[] = [{nombre: "H10 Marina Barcelona", categoria: 3, id:1, poblacion: "Reus", precio: 113,ubicacion:"a"}]
  listHotelesRaw: Hotel[] = []

  constructor(
    private buscadorService: BuscadorService
  ) {

  }

  ngOnInit(): void {
  }

  /**
   * Metodo receptor del event
   * @param hoteles
   */
  setListaHoteles(hoteles:any[]) {
    this.listHotelesRaw = hoteles;
    this.listHoteles = hoteles;
  }

  filtrarHoteles(estrellas: number) {
    this.listHoteles = this.listHotelesRaw.filter(hotel => hotel.categoria >= estrellas);
  }

}
