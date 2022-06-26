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
import { AppRoutingModule } from '../app-routing.module';
import { ComunModule } from '../comun/module/comun/comun.module';
import { NuevoClienteComponent } from './area-admin-view/nuevo-cliente/nuevo-cliente.component';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { NuevoHotelComponent } from './nuevo-hotel/nuevo-hotel.component';
import { NuevoReservaComponent } from './nuevo-reserva/nuevo-reserva.component';
import { ReactiveFormsModule } from '@angular/forms';



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
    NuevoClienteComponent,
    NuevaEmpresaComponent,
    NuevoHotelComponent,
    NuevoReservaComponent,
  ],
  imports: [
    CommonModule,
    AreaModule,
    NgxPaginationModule,
    AppRoutingModule,
    ComunModule,
    ReactiveFormsModule

  ],
  exports: [
    AreaAdminViewComponent
  ]
})
export class AreaAdminViewModule {}
