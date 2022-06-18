import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})



export class BuscadorComponent implements OnInit {

maxDate = new Date();
selectDate = new Date();
fechasalida: Date | undefined;





  constructor() { }

  ngOnInit(): void {

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
