import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaHotelesReservasViewComponent } from './area-hoteles-reservas-view/area-hoteles-reservas-view.component';
import { MishotelesComponent } from '../area-empresa-view/area-empresa-view/mishoteles/mishoteles.component';
import { BarraLateralEmpresaComponent } from './area-hoteles-reservas-view/barra-lateral-empresa/barra-lateral-empresa.component';
import { SeguridadComponent } from '../area-cliente-view/area-cliente-view/seguridad/seguridad.component';



@NgModule({
  declarations: [
    AreaHotelesReservasViewComponent,
    MishotelesComponent,
    BarraLateralEmpresaComponent,
    SeguridadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AreaHotelesReservasViewComponent
  ]
})
export class AreaHotelesReservasViewModule { }
