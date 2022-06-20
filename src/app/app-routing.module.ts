import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';

import { RegistroComponent } from './registro/registro.component';
import { AreaAdminViewComponent } from './area-admin-view/area-admin-view/area-admin-view.component';
import { LogInViewComponent } from './log-in-view/log-in-view/log-in-view.component';
import { AreaClienteViewComponent } from './area-cliente-view/area-cliente-view/area-cliente-view.component';
import { AreaEmpresaViewComponent } from './area-empresa-view/area-empresa-view/area-empresa-view.component';
import { AreaCuentaComponent } from './area-admin-view/area-admin-view/area-cuenta/area-cuenta.component';
import { AreaAdminClientesListaComponent } from './area-admin-view/area-admin-view/clientes-lista/area-admin-clientes-lista.component';
import { AreaAdminEmpresasListasComponent } from './area-admin-view/area-admin-view/empresas-lista/area-admin-empresas-listas.component';
import { AreaAdminHotelesListasComponent } from './area-admin-view/area-admin-view/hoteles-lista/area-admin-hoteles-listas.component';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view/landing-page-view.component';
import { AreaAdminReservasListaComponent } from './area-admin-view/area-admin-view/reservas-lista/area-admin-reservas-lista.component';
import { AreaAdminClienteComponent } from './area-admin-view/area-admin-view/area-admin-cliente/area-admin-cliente.component';
import { AreaAdminReservaComponent } from './area-admin-view/area-admin-view/area-admin-reserva/area-admin-reserva.component';
import { AreaAdminEmpresaComponent } from './area-admin-view/area-admin-view/area-admin-empresa/area-admin-empresa.component';
import { AreaAdminHotelComponent } from './area-admin-view/area-admin-view/area-admin-hotel/area-admin-hotel.component';

const routes: Routes = [
  {path: '', component: LandingPageViewComponent},

  {path:'resultado-busqueda', component: ResultadoBusquedaHotelesViewComponent},

  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'login',
    component: LogInViewComponent
  },

  {
    path:'resultado-busqueda',
    component: ResultadoBusquedaHotelesViewComponent
  },


  // Area Admin Routes
  // ------------------


  {
    path:'area-admin',
    redirectTo: 'area-admin/cuenta',
  },
  {
    path:'area-admin',
    component: AreaAdminViewComponent,
    children: [
      {path: 'cuenta', component: AreaCuentaComponent},
      {path: 'clientes', component: AreaAdminClientesListaComponent},
      {path: 'clientes/:id', component: AreaAdminClienteComponent},
      {path: 'empresas', component: AreaAdminEmpresasListasComponent},
      {path: 'empresas/:id', component: AreaAdminEmpresaComponent},
      {path: 'hoteles', component: AreaAdminHotelesListasComponent},
      {path: 'hoteles/:id', component: AreaAdminHotelComponent},
      {path: 'reservas', component: AreaAdminReservasListaComponent},
      {path: 'reservas/:id', component: AreaAdminReservaComponent},
    ]
  },
  {
    path:'area-cliente',
    component: AreaClienteViewComponent
  },
  {
    path:'area-empresa',
    component:AreaEmpresaViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
