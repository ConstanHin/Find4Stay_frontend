import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaClienteViewComponent } from './area-cliente-view/area-cliente-view.component';
import { BarraLateralComponent } from './area-cliente-view/barra-lateral/barra-lateral.component';
import { AreaclienteComponent } from './area-cliente-view/areacliente/areacliente.component';
import { seguridadComponent } from './area-cliente-view/seguridad/seguridad.component';
import { MisreservasComponent } from './area-cliente-view/misreservas/misreservas.component';



@NgModule({
  declarations: [
    AreaClienteViewComponent,
    BarraLateralComponent,
    AreaclienteComponent,
    seguridadComponent,
    MisreservasComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    AreaClienteViewComponent

  ]
})
export class AreaClienteViewModule { }
