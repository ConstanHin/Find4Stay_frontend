import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/service/reserva.service';


@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.component.html',
  styleUrls: ['./misreservas.component.css'],
})
export class MisreservasComponent implements OnInit {

  datoreserva: any = [{
    codigo: '',
    fechaEntrada: new Date(),
    fechaSalida: new Date(),
    hotel: '',
    ubicacion:'',
    importe: '',
  }];

  constructor(
    private reservaservice: ReservaService
  ) {}

  ngOnInit(): void {
    this.reservaservice.getReservaByClienteId().subscribe((datosreserva) => {
      this.datoreserva = datosreserva;
      console.log(this.datoreserva);
    });
  }
}
