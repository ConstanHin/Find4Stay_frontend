import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-area-admin-empresas-listas',
  templateUrl: './area-admin-empresas-listas.component.html',
  styleUrls: ['./area-admin-empresas-listas.component.css']
})
export class AreaAdminEmpresasListasComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  listaEmpresas: Empresa[] = [
    {id: 1,codigo_empresa:"ab123", nombre: "KH"},
    {id: 2,codigo_empresa:"ab123", nombre: "KH"},
    {id: 3,codigo_empresa:"ab123", nombre: "KH"},
    {id: 4,codigo_empresa:"ab123", nombre: "KH"},
    {id: 5,codigo_empresa:"ab123", nombre: "KH"},
    {id: 6,codigo_empresa:"ab123", nombre: "KH"},
    {id: 7,codigo_empresa:"ab123", nombre: "KH"},
    {id: 8,codigo_empresa:"ab123", nombre: "KH"},
    {id: 9,codigo_empresa:"ab123", nombre: "KH"},
    {id: 10,codigo_empresa:"ab123", nombre: "KH"},
    {id: 11,codigo_empresa:"ab123", nombre: "KH"},
  ]
  page: number = 1;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.list().subscribe(arrayEmpresas => {
      console.log(arrayEmpresas);

      // const arrayClientes : Cliente[] = [];
      // arrayCuentas.forEach( (cuenta: any) => {
      //   if (!cuenta.cliente) return; // skip si no es cliente

      //   arrayClientes.push(fromCuentaToCliente(cuenta));
      // });

      this.listaEmpresas = arrayEmpresas;
    })
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

  setEmpresa(empresa: Empresa) {
    console.log(empresa);

  }

}
