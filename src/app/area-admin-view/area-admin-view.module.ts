import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaAdminViewComponent } from './area-admin-view/area-admin-view.component';
import { AreaAdminClientesComponent } from './area-admin-view/area-admin-clientes/area-admin-clientes.component';
import { AreaAdminClientesListaComponent } from './area-admin-view/clientes-lista/area-admin-clientes-lista.component';
import { AreaAdminEmpresaComponent } from './area-admin-view/area-admin-empresa/area-admin-empresa.component';
import { AreaAdminEmpresasListasComponent } from './area-admin-view/empresas-lista/area-admin-empresas-listas.component';
import { AreaAdminHotelesComponent } from './area-admin-view/area-admin-hoteles/area-admin-hoteles.component';
import { AreaAdminHotelesListasComponent } from './area-admin-view/hoteles-lista/area-admin-hoteles-listas.component';
import { AreaAdminReservaComponent } from './area-admin-view/area-admin-reserva/area-admin-reserva.component';
import { AreaAdminReservasListaComponent } from './area-admin-view/reservas-lista/area-admin-reservas-lista.component';
import { AreaModule } from '../area/area.module';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AreaAdminViewComponent,
    AreaAdminClientesComponent,
    AreaAdminClientesListaComponent,
    AreaAdminEmpresaComponent,
    AreaAdminEmpresasListasComponent,
    AreaAdminHotelesComponent,
    AreaAdminHotelesListasComponent,
    AreaAdminReservaComponent,
    AreaAdminReservasListaComponent,

  ],
  imports: [
    CommonModule,
    AreaModule,
    NgxPaginationModule,
  ],
  exports: [
    AreaAdminViewComponent
  ]
})
export class AreaAdminViewModule {}
