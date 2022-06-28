import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-area-admin-empresas-listas',
  templateUrl: './area-admin-empresas-listas.component.html',
  styleUrls: ['./area-admin-empresas-listas.component.css']
})
export class AreaAdminEmpresasListasComponent implements OnInit {

  loading: boolean = true;

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  listaEmpresas: Empresa[] = [
    /* {id: 1,codigo_empresa:"ab123", nombre: "KH"},
    {id: 2,codigo_empresa:"ab123", nombre: "KH"},
    {id: 3,codigo_empresa:"ab123", nombre: "KH"},
    {id: 4,codigo_empresa:"ab123", nombre: "KH"},
    {id: 5,codigo_empresa:"ab123", nombre: "KH"},
    {id: 6,codigo_empresa:"ab123", nombre: "KH"},
    {id: 7,codigo_empresa:"ab123", nombre: "KH"},
    {id: 8,codigo_empresa:"ab123", nombre: "KH"},
    {id: 9,codigo_empresa:"ab123", nombre: "KH"},
    {id: 10,codigo_empresa:"ab123", nombre: "KH"},
    {id: 11,codigo_empresa:"ab123", nombre: "KH"}, */
  ]
  page: number = 1;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.list().subscribe(arrayEmpresas => {
      console.log(arrayEmpresas);
      this.listaEmpresas = arrayEmpresas;
    })
    this.loading = false;
  }




  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

  setEmpresa(empresa: Empresa) {
    console.log(empresa);

  }

  deleteEmpresa(id: number, arrayIndex: number) {

    this.empresaService.delete(id).subscribe({
      next: v => {
        console.log("eliminado con éxito", v);
        // Eliminarlo del array para mostrar los cambios
        this.listaEmpresas.splice(arrayIndex, 1)
      },
      error: e => console.log(e)
    })

  }

}
