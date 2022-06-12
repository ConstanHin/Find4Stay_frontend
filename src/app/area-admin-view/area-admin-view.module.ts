import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaAdminViewComponent } from './area-admin-view/area-admin-view.component';
import { AreaAdminComponent } from './area-admin-view/area-admin/area-admin.component';
import { AreaAdminClientesComponent } from './area-admin-view/area-admin-clientes/area-admin-clientes.component';
import { AreaAdminClientesListaComponent } from './area-admin-view/area-admin-clientes-lista/area-admin-clientes-lista.component';
import { AreaAdminEmpresaComponent } from './area-admin-view/area-admin-empresa/area-admin-empresa.component';
import { AreaAdminEmpresasListasComponent } from './area-admin-view/area-admin-empresas-listas/area-admin-empresas-listas.component';
import { AreaAdminHotelesComponent } from './area-admin-view/area-admin-hoteles/area-admin-hoteles.component';
import { AreaAdminHotelesListasComponent } from './area-admin-view/area-admin-hoteles-listas/area-admin-hoteles-listas.component';
import { AreaAdminReservaComponent } from './area-admin-view/area-admin-reserva/area-admin-reserva.component';
import { AreaAdminReservasListaComponent } from './area-admin-view/area-admin-reservas-lista/area-admin-reservas-lista.component';
import { BarraLateralAdminComponent } from './area-admin-view/barra-lateral-admin/barra-lateral-admin.component';



@NgModule({
  declarations: [
    AreaAdminViewComponent,
    AreaAdminComponent,
    AreaAdminClientesComponent,
    AreaAdminClientesListaComponent,
    AreaAdminEmpresaComponent,
    AreaAdminEmpresasListasComponent,
    AreaAdminHotelesComponent,
    AreaAdminHotelesListasComponent,
    AreaAdminReservaComponent,
    AreaAdminReservasListaComponent,
    BarraLateralAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AreaAdminViewComponent
  ]
})
export class AreaAdminViewModule { }
