import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaClienteViewComponent } from './area-cliente-view/area-cliente-view.component';
import { AreaclienteComponent } from './area-cliente-view/areacliente/areacliente.component';
import { seguridadComponent } from './area-cliente-view/seguridad/seguridad.component';
import { MisreservasComponent } from './area-cliente-view/misreservas/misreservas.component';
import { AreaModule } from '../area/area.module';


@NgModule({
  declarations: [
    AreaClienteViewComponent,
    AreaclienteComponent,
    seguridadComponent,
    MisreservasComponent

  ],
  imports: [
    CommonModule,
    AreaModule
  ],
  exports:[
    AreaClienteViewComponent

  ]
})
export class AreaClienteViewModule { }
