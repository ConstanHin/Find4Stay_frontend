import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaClienteSeguridadViewComponent } from './area-cliente-seguridad-view/area-cliente-seguridad-view.component';
import { BarraLateralComponent } from './area-cliente-seguridad-view/barra-lateral/barra-lateral.component';
import { SeguridadComponent } from './area-cliente-seguridad-view/seguridad/seguridad.component';



@NgModule({
  declarations: [
    AreaClienteSeguridadViewComponent,
    BarraLateralComponent,
    SeguridadComponent
  ],

  imports: [
    CommonModule

  ],
  exports: [ AreaClienteSeguridadViewComponent
  ]
})
export class AreaClienteSeguridadViewModule { }
