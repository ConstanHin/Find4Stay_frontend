import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AreaService } from '../area.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  // @Input() role : string = "" //admin/cliente/empresa
  role: string | null = null

  constructor(
    private areaService: AreaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Set botones de la barra lateral segun el rol del usuario
    this.role = this.areaService.getRoleArea()
    this.setCssClassSelected(this.areaService.getApartado());
  }

  /**
   * Accion al clicar los botones de la barra lateral
   */
  cambiarApartado(apartado: string) {
    this.setCssClassSelected(apartado);

    /* Cambio componente -> envia evento al componente padre
     * que a su vez cambia el componente principal
     */
    this.cambiarApartadoEvent.emit(apartado);
    this.areaService.setApartado(apartado);
  }

  setCssClassSelected(apartado: string) {
    // Aspecto Botones -> Modificar la class "selected" del elemento de la barra lateral
    document.querySelectorAll('ul a').forEach((elem) => {
      elem.classList.remove('selected');
    });
    document.getElementById(apartado)?.classList.add('selected');
  }

}
