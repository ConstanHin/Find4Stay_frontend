import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { Reserva } from 'src/app/models/reserva';
import { ClienteService } from 'src/app/service/cliente.service';
import { EmpresaService } from 'src/app/service/empresa.service';
import { HotelService } from 'src/app/service/hotel.service';
import { ReservaService } from 'src/app/service/reserva.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-nuevo-hotel',
  templateUrl: './nuevo-hotel.component.html',
  styleUrls: ['./nuevo-hotel.component.css']
})
export class NuevoHotelComponent implements OnInit {

  message: string | undefined;
  errorMessage: string | undefined;
  listaEmpresas: Empresa[] = []

  loading:boolean = true;

    /**
   * nombre categoria poblacion ubicacion importe
   */
     formGroupAddHotel = new FormGroup({
      empresa: new FormControl('', Validators.required),

      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      poblacion: new FormControl('',),
      ubicacion: new FormControl('',),
      importe: new FormControl('', Validators.required),


    })


  constructor( private hotelService: HotelService, private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.list().subscribe({
      next: (v) => {
        this.listaEmpresas = v; console.log(v);
        this.loading = false
      },
      error: (e) => {console.log(e),
      this.loading = false
      },
      complete: () => "empresas list endpoint complete"

    })

  }

  submit() {
    console.log(this.formGroupAddHotel.value);

    this.hotelService.create(this.formGroupAddHotel.value).subscribe({
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
