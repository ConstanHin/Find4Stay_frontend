import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaAdminViewComponent } from './area-admin-view/area-admin-view.component';
import { AreaAdminClienteComponent } from './area-admin-view/area-admin-cliente/area-admin-cliente.component';
import { AreaAdminClientesListaComponent } from './area-admin-view/clientes-lista/area-admin-clientes-lista.component';
import { AreaAdminEmpresaComponent } from './area-admin-view/area-admin-empresa/area-admin-empresa.component';
import { AreaAdminEmpresasListasComponent } from './area-admin-view/empresas-lista/area-admin-empresas-listas.component';
import { AreaAdminHotelComponent } from './area-admin-view/area-admin-hotel/area-admin-hotel.component';
import { AreaAdminHotelesListasComponent } from './area-admin-view/hoteles-lista/area-admin-hoteles-listas.component';
import { AreaAdminReservaComponent } from './area-admin-view/area-admin-reserva/area-admin-reserva.component';
import { AreaAdminReservasListaComponent } from './area-admin-view/reservas-lista/area-admin-reservas-lista.component';
import { AreaModule } from '../area/area.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { NumberToStarsPipe } from '../pipes/number-to-stars.pipe';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    AreaAdminViewComponent,
    AreaAdminClienteComponent,
    AreaAdminClientesListaComponent,
    AreaAdminEmpresaComponent,
    AreaAdminEmpresasListasComponent,
    AreaAdminHotelComponent,
    AreaAdminHotelesListasComponent,
    AreaAdminReservaComponent,
    AreaAdminReservasListaComponent,
    NumberToStarsPipe,
  ],
  imports: [
    CommonModule,
    AreaModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  exports: [
    AreaAdminViewComponent
  ]
})
export class AreaAdminViewModule {}
