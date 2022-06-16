import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-area-admin-reservas-lista',
  templateUrl: './area-admin-reservas-lista.component.html',
  styleUrls: ['./area-admin-reservas-lista.component.css']
})
export class AreaAdminReservasListaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
