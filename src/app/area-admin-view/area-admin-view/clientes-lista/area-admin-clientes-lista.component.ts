import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { AreaService } from 'src/app/area/area.service';
import data from '../../../fake-data/fake-data-clientes.json';
import { CuentaService } from 'src/app/service/cuenta.service';
import { fromCuentaToCliente } from 'src/app/helpers/FromCuentaToCliente';

@Component({
  selector: 'app-area-admin-clientes-lista',
  templateUrl: './area-admin-clientes-lista.component.html',
  styleUrls: ['./area-admin-clientes-lista.component.css']
})
export class AreaAdminClientesListaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  // Datos de prueba. Substituir por datos recibidos por la base de datos
  listaClientes: Cliente[] = [];
  page: number = 1;

  constructor(
    private areaService: AreaService,
    private cuentaService: CuentaService
  ) { }

  ngOnInit(): void {
    this.listaClientes = data.clientes;
    this.cuentaService.list().subscribe(arrayCuentas => {
      // convertir de cuentas a clientes
      const arrayClientes : Cliente[] = [];
      arrayCuentas.forEach( (cuenta: any) => {
        if (!cuenta.cliente) return; // skip si no es cliente

        // const cliente = new Cliente();
        // cliente.id = cuenta.cliente.id;
        // cliente.nombre = cuenta.cliente.nombre;
        // cliente.apellido = cuenta.cliente.apellido;
        // cliente.email = cuenta.email; // excepción, el email está directamente en cuenta
        // cliente.dni = cuenta.cliente.dni;
        arrayClientes.push(fromCuentaToCliente(cuenta));
      });

      this.listaClientes = arrayClientes;
    })
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

  setCliente(cliente: Cliente) {
    this.areaService.setCliente(cliente)
  }

}
