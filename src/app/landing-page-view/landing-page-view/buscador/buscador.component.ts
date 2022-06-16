import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {



maxDate = new Date();
selectDate = new Date();



  constructor() { }

  ngOnInit(): void {
  }

  guardarFechaEntrada(event: any) {
    console.log(event.target.value);
    this.selectDate = event.target.value;

  }

  onClick() {
    
  }



}
