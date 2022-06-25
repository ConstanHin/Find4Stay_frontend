import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';

import { RegistroComponent } from './registro/registro.component';
import { AreaAdminViewComponent } from './area-admin-view/area-admin-view/area-admin-view.component';
import { LogInViewComponent } from './log-in-view/log-in-view/log-in-view.component';
import { AreaClienteViewComponent } from './area-cliente-view/area-cliente-view/area-cliente-view.component';
import { AreaEmpresaViewComponent } from './area-empresa-view/area-empresa-view/area-empresa-view.component';
import { AreaCuentaComponent } from './area/area-cuenta/area-cuenta.component';
import { AreaAdminClientesListaComponent } from './area-admin-view/area-admin-view/clientes-lista/area-admin-clientes-lista.component';
import { AreaAdminEmpresasListasComponent } from './area-admin-view/area-admin-view/empresas-lista/area-admin-empresas-listas.component';
import { AreaAdminHotelesListasComponent } from './area-admin-view/area-admin-view/hoteles-lista/area-admin-hoteles-listas.component';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view/landing-page-view.component';
import { AreaAdminReservasListaComponent } from './area-admin-view/area-admin-view/reservas-lista/area-admin-reservas-lista.component';
import { AreaAdminClienteComponent } from './area-admin-view/area-admin-view/area-admin-cliente/area-admin-cliente.component';
import { AreaAdminReservaComponent } from './area-admin-view/area-admin-view/area-admin-reserva/area-admin-reserva.component';
import { AreaAdminEmpresaComponent } from './area-admin-view/area-admin-view/area-admin-empresa/area-admin-empresa.component';
import { AreaAdminHotelComponent } from './area-admin-view/area-admin-view/area-admin-hotel/area-admin-hotel.component';
import { AreaclienteComponent } from './area-cliente-view/area-cliente-view/areacliente/areacliente.component';
import { MisreservasComponent } from './area-cliente-view/area-cliente-view/misreservas/misreservas.component';
import { MishotelesComponent } from './area-empresa-view/area-empresa-view/mishoteles/mishoteles.component';
import { NuevoClienteComponent } from './area-admin-view/area-admin-view/nuevo-cliente/nuevo-cliente.component';
import { NuevaEmpresaComponent } from './area-admin-view/nueva-empresa/nueva-empresa.component';
import { NuevoHotelComponent } from './area-admin-view/nuevo-hotel/nuevo-hotel.component';

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
      {path: 'clientes/add', component: NuevoClienteComponent},
      {path: 'clientes/:id', component: AreaAdminClienteComponent},
      {path: 'clientes', component: AreaAdminClientesListaComponent},
      {path: 'empresas/add', component: NuevaEmpresaComponent},
      {path: 'empresas/:id', component: AreaAdminEmpresaComponent},
      {path: 'empresas', component: AreaAdminEmpresasListasComponent},
      {path: 'hoteles/add', component: NuevoHotelComponent},
      {path: 'hoteles/:id', component: AreaAdminHotelComponent},
      {path: 'hoteles', component: AreaAdminHotelesListasComponent},
      {path: 'reservas/:id', component: AreaAdminReservaComponent},
      {path: 'reservas', component: AreaAdminReservasListaComponent},
    ]
  },

  {
    path:'area-cliente',
    component: AreaClienteViewComponent,
    children: [
      {path: 'misreservas/:id', component: MisreservasComponent},
      {path: 'misdatos/:id', component: AreaclienteComponent},
      {path: 'cuenta', component: AreaCuentaComponent},

    ]
  },
  {
    path:'area-empresa',
    component:AreaEmpresaViewComponent,
    children: [
      {path: 'cuenta', component: AreaCuentaComponent},
      {path: 'misclientes', component: AreaclienteComponent},
      {path: 'empresas/add', component: NuevaEmpresaComponent},
      {path: 'empresas', component: AreaEmpresaViewComponent},
      {path: 'mishoteles', component: MishotelesComponent},
      {path: 'reservas', component: MisreservasComponent},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
