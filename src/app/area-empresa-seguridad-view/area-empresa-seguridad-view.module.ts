import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaEmpresaSeguridadViewComponent } from './area-empresa-seguridad-view/area-empresa-seguridad-view.component';
import { BarraLateralComponent } from './area-empresa-seguridad-view/barra-lateral/barra-lateral.component';
import { SeguridadComponent } from './area-empresa-seguridad-view/seguridad/seguridad.component';



@NgModule({
  declarations: [
    AreaEmpresaSeguridadViewComponent,
    BarraLateralComponent,
    SeguridadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AreaEmpresaSeguridadViewComponent
  ]
})
export class AreaEmpresaSeguridadViewModule { }
