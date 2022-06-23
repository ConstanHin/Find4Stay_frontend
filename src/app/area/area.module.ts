import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { AreaCuentaComponent } from '../area-admin-view/area-admin-view/area-cuenta/area-cuenta.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BarraLateralComponent,
    AreaCuentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    BarraLateralComponent,
    AreaCuentaComponent
  ]
})
export class AreaModule { }
