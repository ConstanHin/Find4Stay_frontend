import { Component, OnInit} from '@angular/core';
import {Inject, Injectable} from '@angular/core';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})



export class BuscadorComponent implements OnInit {

cuidades: any;
seleccionado: any = '';
ciudadSelect: any ='';

maxDate = new Date();
selectDate = new Date();
fechasalida: Date | undefined;

resultado!: string;

formularioContacto = new FormGroup({
  destino: new FormControl('', [Validators.required]),
  personas: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  fechaEntrada: new FormControl('', [Validators.required]),
  fechaSalida: new FormControl('', [Validators.required])

});


  constructor(  private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,) { }


  ngOnInit(): void {

  }

  submit() {
    if (this.formularioContacto.valid)
    this.resultado = "Todos los datos son válidos";
  else
    this.resultado = "Hay datos inválidos en el formulario";
  }

  getDateFormatString(): string {
    if (this._locale === 'ja-JP') {
      return 'YYYY/MM/DD';
    } else if (this._locale === 'fr') {
      return 'DD/MM/YYYY';
    }
    return '';
  }


  guardarFechaEntrada(event: any) {
    console.log(event.target.value);
    this.selectDate = event.target.value;
    return this.selectDate;

  }

  guardarFechaSalida(event: any) {
    console.log(event.target.value);
    this.fechasalida = event.target.value;
    return this.fechasalida;
  }


  saveCheckOut () {
    this.selectDate = new Date(this.maxDate);
    return this.selectDate;
  }



  getFecha() {
    return this.maxDate;

  }


}
