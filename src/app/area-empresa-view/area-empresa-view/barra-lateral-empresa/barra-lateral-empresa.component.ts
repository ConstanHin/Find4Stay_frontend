import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-lateral-empresa',
  templateUrl: './barra-lateral-empresa.component.html',
  styleUrls: ['./barra-lateral-empresa.component.css']
})
export class BarraLateralEmpresaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }
}
