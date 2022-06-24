import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { AreaCuentaComponent } from './area-cuenta/area-cuenta.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from '../comun/module/comun/comun.module';


@NgModule({
  declarations: [
    BarraLateralComponent,
    AreaCuentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ComunModule
  ],
  exports: [
    BarraLateralComponent,
    AreaCuentaComponent
  ]
})
export class AreaModule { }
