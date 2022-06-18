import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MapComponent } from '../map/map.component';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  mapComponent: MapComponent;

  cuidades: any;
  seleccionado: any = '';
  ciudadSelect: any ='';

  formCity = new FormGroup({
    city: new FormControl()
  });

  constructor(private mapcomponent:MapComponent) {
    this.mapComponent = mapcomponent;
    this.cuidades = ['Reus', 'Tarragona', 'Barcelona'];
    this.seleccionado = sessionStorage.getItem('ciudadKey');

  }

  capturar() {
    this.ciudadSelect = this.seleccionado;
    console.log(this.seleccionado + "capturar");
    this.mapComponent.changeCity(this.ciudadSelect);

  }

  ngOnInit(): void {
  }

  getSeleccionado() {
    return this.ciudadSelect;
  }

}
