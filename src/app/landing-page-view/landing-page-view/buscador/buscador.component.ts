import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BuscadorService } from 'src/app/service/buscador.service';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})


export class BuscadorComponent implements OnInit {

  @Input() secResBusqueda: boolean = false;
  @Output() eventoEnvio = new EventEmitter<Hotel[]>();
  listaHotelesCity: Hotel[] = [];
  cuidades: any;
  seleccionado: any = '';
  ciudadSelect: any = '';

  maxDate = new Date();
  selectDate = new Date();
  fecha_salida: Date | undefined;

  resultado!: string;

  form: FormGroup = new FormGroup({
    destino: new FormControl(''),
    personas: new FormControl(''),
    fecha_entrada: new FormControl(''),
    fecha_salida: new FormControl('')
  });

  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private buscadorService: BuscadorService,
    private hotelService: HotelService
    // private _adapter: DateAdapter<any>,
    // @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        destino: ['', Validators.required],
        personas: ['', Validators.required],
        fecha_entrada: ['', Validators.required],
        fecha_salida: ['', Validators.required]
      }
    )

    // this.form.setValue(this.buscadorService.getDatosBusqueda())

  }

  ngAfterViewInit() {
    if (this.buscadorService.getDatosBusqueda().destino) {
      console.log(this.buscadorService.getDatosBusqueda());
      this.form.setValue(this.buscadorService.getDatosBusqueda())

    }

  }

  range = new FormGroup({
    fecha_entrada: new FormControl(),
    fecha_salida: new FormControl(),

  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      console.info("Form invalid!!");
      return;
    }

    console.log(this.form.value);
    // console.log(JSON.stringify(this.form.value, null, 2));

    // Guardar los datos de busqueda
    this.buscadorService.setDatosBusqueda(this.form.value)
    // Cambiar vista
    this.router.navigate(["/resultado-busqueda"]).then(() => {
      console.log("then yes");

    })

    if (this.secResBusqueda) {
      // buscar hoteles por ciudad
      console.log("buscar hoteles por ciudad");
      console.log('destino: ', this.form.value.destino);

      this.hotelService.getByCiudad(this.form.value.destino).subscribe({
        next: (v) => {this.listaHotelesCity = v, this.eventoEnvio.emit(v)},
        error: e => console.log(e)
      });



    }
  }

  /**
   *
   */
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  /**
   *
   * @param event
   * @returns
   */
  guardarFechaEntrada(event: any) {
    console.log(event.target.value);
    this.selectDate = event.target.value;
    return this.selectDate;

  }

  /**
   *
   * @param event
   * @returns
   */
  guardarfechaSalida(event: any) {
    console.log(event.target.value);
    this.fecha_salida = event.target.value;
    return this.fecha_salida;
  }


  /**
   *
   * @returns
   */
  saveCheckOut() {
    this.selectDate = new Date(this.maxDate);
    return this.selectDate;
  }

  /**
   *
   * @returns
   */
  getFecha() {
    return this.maxDate;

  }
}





