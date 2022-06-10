import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-lateral-admin',
  templateUrl: './barra-lateral-admin.component.html',
  styleUrls: ['./barra-lateral-admin.component.css']
})
export class BarraLateralAdminComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
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
