import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaEmpresaViewComponent } from './area-empresa-view/area-empresa-view.component';
import { BarraLateralEmpresaComponent } from './area-empresa-view/barra-lateral-empresa/barra-lateral-empresa.component';
import { AreaempresaComponent } from './area-empresa-view/areaempresa/areaempresa.component';



@NgModule({
  declarations: [
    AreaEmpresaViewComponent,
    BarraLateralEmpresaComponent,
    AreaempresaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AreaEmpresaViewComponent

  ]
})
export class AreaEmpresaViewModule { }
