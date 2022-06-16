import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  // @Input() role : string = "" //admin/cliente/empresa
  role: string = ""

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.role = this.areaService.getRole()
  }

  /**
   * Accion al clicar los botones de la barra lateral
   */
  cambiarApartado(apartado: string) {
    // Aspecto Botones -> Modificar la class "selected" del elemento de la barra lateral
    document.querySelectorAll('ul a').forEach((elem) => {
      elem.classList.remove('selected');
    });
    document.getElementById(apartado)?.classList.add('selected');

    /* Cambio componente -> envia evento al componente padre
     * que a su vez cambia el componente principal
     */
    this.cambiarApartadoEvent.emit(apartado);
  }

}
