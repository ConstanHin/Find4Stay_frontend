import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { BuscadorService } from 'src/app/service/buscador.service';
import { HotelService } from 'src/app/service/hotel.service';
@Component({
  selector: 'app-resultado-busqueda-hoteles-view',
  templateUrl: './resultado-busqueda-hoteles-view.component.html',
  styleUrls: ['./resultado-busqueda-hoteles-view.component.css']
})
export class ResultadoBusquedaHotelesViewComponent implements OnInit {

  listHoteles: Hotel[] = []
  listHotelesRaw: Hotel[] = []
  datos: any;

  constructor(
    private buscadorService: BuscadorService,
    private hotelService: HotelService,
  ) {

  }

  ngOnInit(): void {

    this.datos = this.buscadorService.getDatosBusqueda();
    console.info("!!datos: ", this.datos);
    this.hotelService.getByCiudad(this.datos.destino).subscribe({
      next: (v) => { this.listHotelesRaw = v; this.listHoteles = v},
      error: e => console.log(e)
    });
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
