import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-area-admin-clientes-lista',
  templateUrl: './area-admin-clientes-lista.component.html',
  styleUrls: ['./area-admin-clientes-lista.component.css']
})
export class AreaAdminClientesListaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
