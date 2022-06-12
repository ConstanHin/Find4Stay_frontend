import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';

import { RegistroComponent } from './registro/registro.component';
import { AreaAdminViewComponent } from './area-admin-view/area-admin-view/area-admin-view.component';

const routes: Routes = [

  {
    path:'registro',
    component:RegistroComponent
  },

  {
    path:'inicio-sesion',
    component: LogInComponent
  },

  {
    path:'resultado-busqueda',
    component: ResultadoBusquedaHotelesViewComponent
  },
  {
    path:'area-admin',
    component: AreaAdminViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
