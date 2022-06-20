import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-area-admin-reservas-lista',
  templateUrl: './area-admin-reservas-lista.component.html',
  styleUrls: ['./area-admin-reservas-lista.component.css']
})
export class AreaAdminReservasListaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();

  listaReservas: Reserva[] = [
    { codigo: "A141", fechaEntrada: new Date(), fechaSalida: new Date(), importe: 222.50 },
    { codigo: "A221", fechaEntrada: new Date(), fechaSalida: new Date(), importe: 222.50 },
    { codigo: "A312", fechaEntrada: new Date(), fechaSalida: new Date(), importe: 222.50 },
    { codigo: "A441", fechaEntrada: new Date(), fechaSalida: new Date(), importe: 222.50 },

  ]

  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
