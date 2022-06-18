import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-area-admin-clientes-lista',
  templateUrl: './area-admin-clientes-lista.component.html',
  styleUrls: ['./area-admin-clientes-lista.component.css']
})
export class AreaAdminClientesListaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  // Datos de prueba. Substituir por datos recibidos por la base de datos
  listaClientes: Cliente[] = [
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
  ];
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
