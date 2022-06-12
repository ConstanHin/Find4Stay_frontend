import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaClienteViewComponent } from './area-cliente-view/area-cliente-view.component';
import { BarraLateralComponent } from './area-cliente-view/barra-lateral/barra-lateral.component';
import { AreaclienteComponent } from './area-cliente-view/areacliente/areacliente.component';



@NgModule({
  declarations: [
    AreaClienteViewComponent,
    BarraLateralComponent,
    AreaclienteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AreaClienteViewComponent

  ]
})
export class AreaClienteViewModule { }
