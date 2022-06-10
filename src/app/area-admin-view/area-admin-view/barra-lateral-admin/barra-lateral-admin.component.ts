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
    // Modificar la class "selected" del elemento de la barra lateral
    document.querySelectorAll('ul a').forEach((elem) => {
      elem.classList.remove('selected');
    });
    document.getElementById(apartado)?.classList.add('selected');

    // Enviar evento al componente padre
    this.cambiarApartadoEvent.emit(apartado);
  }

}
