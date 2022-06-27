import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotelService } from 'src/app/service/hotel.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-mishoteles',
  templateUrl: './mishoteles.component.html',
  styleUrls: ['./mishoteles.component.css']
})
export class MishotelesComponent implements OnInit {

  id?: any;
  email?: any;
  data: any = {"id":""};
  datohoteles: any = {"nombre": "", "categoria": "", "ubicacion": "", "poblacion":"", "precio": ""};
  message: string | undefined;
  errorMessage: string | undefined;
  listaEmpresas: Empresa[] = []

  loading: boolean = true;

  formGroupAddHotel = new FormGroup({
    id_empresa: new FormControl('', Validators.required),

    nombre: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    poblacion: new FormControl('',),
    ubicacion: new FormControl('',),
    importe: new FormControl('', Validators.required),


  })
  constructor(private empresaService: EmpresaService, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.empresaService.getempresaauth().subscribe(
      hoteles => { this.datohoteles = hoteles
        console.log(hoteles)
      }
    );

    this.empresaService.list().subscribe({
      next: (v) => {
        this.listaEmpresas = v; console.log(v);
        this.loading = false
      },
      error: (e) => {
        console.log(e),
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
