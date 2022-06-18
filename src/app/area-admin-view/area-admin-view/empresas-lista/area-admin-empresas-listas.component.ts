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
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
    {codigo:"ab123", nombre: "KH"},
  ]
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
