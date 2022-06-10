import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-area-admin-hoteles-listas',
  templateUrl: './area-admin-hoteles-listas.component.html',
  styleUrls: ['./area-admin-hoteles-listas.component.css']
})
export class AreaAdminHotelesListasComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
