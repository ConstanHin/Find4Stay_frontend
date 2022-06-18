import { Component, OnInit} from '@angular/core';
import {Inject} from '@angular/core';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';




@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})



export class BuscadorComponent implements OnInit {

maxDate = new Date();
selectDate = new Date();
fechasalida: Date | undefined;


  constructor(  private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,) { }

  ngOnInit(): void {

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
