import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { AreaCuentaComponent } from '../area-admin-view/area-admin-view/area-cuenta/area-cuenta.component';


@NgModule({
  declarations: [
    BarraLateralComponent,
    AreaCuentaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarraLateralComponent,
    AreaCuentaComponent
  ]
})
export class AreaModule { }
