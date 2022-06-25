import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';
import { ReservaService } from 'src/app/service/reserva.service';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-nuevo-reserva',
  templateUrl: './nuevo-reserva.component.html',
  styleUrls: ['./nuevo-reserva.component.css']
})
export class NuevoReservaComponent implements OnInit {

  message: string | undefined;
  errorMessage: string | undefined;
  listaHotel: Hotel[] = []
  listaClientes: Cliente[] = []
  loading: boolean = true;


    /**
   * codigo_empresa fecha_entrada fecha_salida importe_reserva
   */
     formGroupAddReserva = new FormGroup({
      hotel: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
      codigo_empresa: new FormControl('', Validators.required),
      fecha_entrada: new FormControl('', Validators.required),
      fecha_salida: new FormControl('', Validators.required),
      importe_reserva: new FormControl('', Validators.required),

    })

  constructor(private reservaService: ReservaService, private hotelService: HotelService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.hotelService.list().subscribe({
      next: (v) => {
        this.listaHotel = v; console.log(v);
        this.loading = false
      },
      error: (e) => {console.log(e),
      this.loading = false
      },
      complete: () => "reservas list endpoint complete"

    })

    this.clienteService.list().subscribe({
      next: (v) => {
        this.listaClientes = v; console.log(v);
        this.loading = false
      },
      error: (e) => {console.log(e),
      this.loading = false
      },
      complete: () => "clientes list endpoint complete"

    })
  }


  submit() {
    console.log(this.formGroupAddReserva.value);

    this.reservaService.create(this.formGroupAddReserva.value).subscribe({
      next: v => {
        this.message = "Registo añadido con éxito.";
        setTimeout(() => this.message = undefined, 4000);
      },
      error: e => {
        this.errorMessage = "Ha ocurrido un error.";
        setTimeout(() => this.errorMessage = undefined, 4000)
      }

    })
  }



}
