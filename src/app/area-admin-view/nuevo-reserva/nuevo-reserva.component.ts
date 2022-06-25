import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-nuevo-reserva',
  templateUrl: './nuevo-reserva.component.html',
  styleUrls: ['./nuevo-reserva.component.css']
})
export class NuevoReservaComponent implements OnInit {

  message: string | undefined;
  errorMessage: string | undefined;


    /**
   * codigo_empresa fecha_entrada fecha_salida importe_reserva
   */
     formGroupAddReserva = new FormGroup({
      codigo_empresa: new FormControl('', Validators.required),
      fecha_entrada: new FormControl('', Validators.required),
      fecha_salida: new FormControl('', Validators.required),
      importe_reserva: new FormControl('', Validators.required),

    })

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
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
