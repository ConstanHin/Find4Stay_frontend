import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { AreaService } from 'src/app/area/area.service';
import data from '../../../fake-data/fake-data-clientes.json';

@Component({
  selector: 'app-area-admin-clientes-lista',
  templateUrl: './area-admin-clientes-lista.component.html',
  styleUrls: ['./area-admin-clientes-lista.component.css']
})
export class AreaAdminClientesListaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  // Datos de prueba. Substituir por datos recibidos por la base de datos
  listaClientes: Cliente[] = [
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
  ];
  page: number = 1;

  constructor(
    private areaService: AreaService,
  ) { }

  ngOnInit(): void {
    this.listaClientes = data.clientes;
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

  setCliente(cliente: Cliente) {
    this.areaService.setCliente(cliente)
  }

}
