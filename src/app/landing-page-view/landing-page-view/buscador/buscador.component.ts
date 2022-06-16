import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {



maxDate = new Date();


  constructor() { }

  ngOnInit(): void {
  }

  guardarFechaEntrada(fecha:Date) {
    console.log(fecha);
  }



}
