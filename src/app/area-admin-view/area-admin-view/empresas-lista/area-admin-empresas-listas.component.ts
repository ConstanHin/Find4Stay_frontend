import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-area-admin-empresas-listas',
  templateUrl: './area-admin-empresas-listas.component.html',
  styleUrls: ['./area-admin-empresas-listas.component.css']
})
export class AreaAdminEmpresasListasComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  listaEmpresas: Empresa[] = [
    {id: 1,codigo:"ab123", nombre: "KH"},
    {id: 2,codigo:"ab123", nombre: "KH"},
    {id: 3,codigo:"ab123", nombre: "KH"},
    {id: 4,codigo:"ab123", nombre: "KH"},
    {id: 5,codigo:"ab123", nombre: "KH"},
    {id: 6,codigo:"ab123", nombre: "KH"},
    {id: 7,codigo:"ab123", nombre: "KH"},
    {id: 8,codigo:"ab123", nombre: "KH"},
    {id: 9,codigo:"ab123", nombre: "KH"},
    {id: 10,codigo:"ab123", nombre: "KH"},
    {id: 11,codigo:"ab123", nombre: "KH"},
  ]
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
