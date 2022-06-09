import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaAdminReservaComponent } from './area-admin-reserva/area-admin-reserva.component';

import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'registro',
    component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
