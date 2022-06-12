import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaHotelesReservasViewComponent } from './area-hoteles-reservas-view/area-hoteles-reservas-view.component';
import { MishotelesComponent } from './area-hoteles-reservas-view/mishoteles/mishoteles.component';
import { BarraLateralEmpresaComponent } from './area-hoteles-reservas-view/barra-lateral-empresa/barra-lateral-empresa.component';



@NgModule({
  declarations: [
    AreaHotelesReservasViewComponent,
    MishotelesComponent,
    BarraLateralEmpresaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AreaHotelesReservasViewComponent
  ]
})
export class AreaHotelesReservasViewModule { }
