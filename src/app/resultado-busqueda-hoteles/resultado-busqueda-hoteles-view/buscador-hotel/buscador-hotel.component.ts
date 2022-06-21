import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Inject, Injectable } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador-hotel.component.html',
  styleUrls: ['./buscador-hotel.component.css']
})


export class BuscadorHotelComponent implements OnInit {


  resultado!: string;

  maxDate = new Date();



  form: FormGroup = new FormGroup({
    destino: new FormControl(''),
    personas: new FormControl(''),
    fechaEntrada: new FormControl(''),
    fechaSalida: new FormControl('')
  });
  submitted = false;

  constructor( private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string, ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
       destino: ['', Validators.required],
       personas: ['', Validators.required],
       fechaEntrada: ['', Validators.required],
       fechasalida: ['', Validators.required]
      }
   )
  }

  range = new FormGroup({
    fechaEntrada: new FormControl(),
    fechaSalida: new FormControl(),

  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  submit() {
    if (this.form.valid)
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

}

