import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaEmpresaViewComponent } from './area-empresa-view/area-empresa-view.component';
import { BarraLateralEmpresaComponent } from './area-empresa-view/barra-lateral-empresa/barra-lateral-empresa.component';
import { AreaempresaComponent } from './area-empresa-view/areaempresa/areaempresa.component';
import { SeguridadComponent } from './area-empresa-view/seguridad/seguridad.component';
import { MishotelesComponent } from './area-empresa-view/mishoteles/mishoteles.component';



@NgModule({
  declarations: [
    AreaEmpresaViewComponent,
    BarraLateralEmpresaComponent,
    AreaempresaComponent,
    SeguridadComponent,
    MishotelesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AreaEmpresaViewComponent

  ]
})
export class AreaEmpresaViewModule { }
