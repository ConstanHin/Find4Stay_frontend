import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaClienteReservasViewComponent } from './area-cliente-reservas-view/area-cliente-reservas-view.component';
import { MisreservasComponent } from './area-cliente-reservas-view/misreservas/misreservas.component';
import { BarraLateralComponent } from './area-cliente-reservas-view/barra-lateral/barra-lateral.component';



@NgModule({
  declarations: [
    AreaClienteReservasViewComponent,
    MisreservasComponent,
    BarraLateralComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AreaClienteReservasViewComponent
  ]
})
export class AreaClienteReservasViewModule { }
