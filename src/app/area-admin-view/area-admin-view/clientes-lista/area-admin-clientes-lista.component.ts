import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { AreaService } from 'src/app/area/area.service';
import data from '../../../fake-data/fake-data-clientes.json';
import { CuentaService } from 'src/app/service/cuenta.service';
import { fromCuentaToCliente } from 'src/app/helpers/FromCuentaToCliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-area-admin-clientes-lista',
  templateUrl: './area-admin-clientes-lista.component.html',
  styleUrls: ['./area-admin-clientes-lista.component.css']
})
export class AreaAdminClientesListaComponent implements OnInit {

  loading: boolean = true;
  disabled: boolean = true;

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  // Datos de prueba. Substituir por datos recibidos por la base de datos
  listaClientes: Cliente[] = [];
  page: number = 1;

  constructor(
    private areaService: AreaService,
    private cuentaService: CuentaService,
    private clienteService: ClienteService,
  ) { }

  ngOnInit(): void {
    this.listaClientes = data.clientes;
    this.cuentaService.list().subscribe({
      next: arrayCuentas => {
        // convertir de cuentas a clientes
        const arrayClientes: Cliente[] = [];
        arrayCuentas.forEach((cuenta: any) => {
          if (!cuenta.cliente) return; // skip si no es cliente

          arrayClientes.push(fromCuentaToCliente(cuenta));
        });

        this.listaClientes = arrayClientes;

        this.loading = false;
      },
      error: (e) => {
        console.log(e);
        this.loading = false;
      }
    })
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

  setCliente(cliente: Cliente) {
    this.areaService.setCliente(cliente)
  }

  editar() {
    this.disabled = !this.disabled;
  }


  deleteCliente(id: number, arrayIndex: number) {

    this.clienteService.delete(id).subscribe({
      next: v => {
        console.log("eliminado con éxito", v);
        // Eliminarlo del array para mostrar los cambios
        this.listaClientes.splice(arrayIndex, 1)
      },
      error: e => console.log(e)
    })

  }

}
