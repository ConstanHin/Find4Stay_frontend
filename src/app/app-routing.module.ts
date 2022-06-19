import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';

import { RegistroComponent } from './registro/registro.component';
import { AreaAdminViewComponent } from './area-admin-view/area-admin-view/area-admin-view.component';
import { LogInViewComponent } from './log-in-view/log-in-view/log-in-view.component';
import { AreaClienteViewComponent } from './area-cliente-view/area-cliente-view/area-cliente-view.component';
import { AreaEmpresaViewComponent } from './area-empresa-view/area-empresa-view/area-empresa-view.component';
import { AreaAdminClienteComponent } from './area-admin-view/area-admin-view/area-admin-cliente/area-admin-cliente.component';
import { AreaCuentaComponent } from './area-admin-view/area-admin-view/area-cuenta/area-cuenta.component';
import { AreaAdminEmpresaComponent } from './area-admin-view/area-admin-view/area-admin-empresa/area-admin-empresa.component';
import { AreaAdminHotelComponent } from './area-admin-view/area-admin-view/area-admin-hotel/area-admin-hotel.component';

const routes: Routes = [

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
  {
    path:'area-admin',
    component: AreaAdminViewComponent
  },
  {
    path:'area-admin/:apartado',
    component: AreaAdminViewComponent,
    children: [
      {path: 'cuenta', component: AreaCuentaComponent},
      {path: 'cliente', component: AreaAdminClienteComponent},
      {path: 'empresa', component: AreaAdminEmpresaComponent},
      {path: 'hotel', component: AreaAdminHotelComponent},
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
