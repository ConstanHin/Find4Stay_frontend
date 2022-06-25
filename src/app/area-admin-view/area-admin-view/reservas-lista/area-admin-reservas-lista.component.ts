import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-area-admin-reservas-lista',
  templateUrl: './area-admin-reservas-lista.component.html',
  styleUrls: ['./area-admin-reservas-lista.component.css']
})
export class AreaAdminReservasListaComponent implements OnInit {

  loading: boolean = true;

  @Output() cambiarApartadoEvent = new EventEmitter<string>();

  listaReservas: Reserva[] = [
    { id: 0, codigo: "A141", fecha_entrada: new Date(), fecha_salida: new Date(), importe_reserva: 222.50 },
    { id: 0, codigo: "A221", fecha_entrada: new Date(), fecha_salida: new Date(), importe_reserva: 222.50 },
    { id: 0, codigo: "A312", fecha_entrada: new Date(), fecha_salida: new Date(), importe_reserva: 222.50 },
    { id: 0, codigo: "A441", fecha_entrada: new Date(), fecha_salida: new Date(), importe_reserva: 222.50 },

  ]

  page: number = 1;

  constructor(private reservasService: ReservaService) { }

  ngOnInit(): void {
    this.reservasService.list().subscribe({
      next: (v) => {
        this.listaReservas = v; console.log(v);
        this.loading = false
      },
      error: (e) => {console.log(e),
      this.loading = false
      },
      complete: () => "reservas list endpoint complete"

    })
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
