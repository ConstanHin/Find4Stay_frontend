import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaEmpresaViewComponent } from './area-empresa-view/area-empresa-view.component';
import { AreaempresaComponent } from './area-empresa-view/areaempresa/areaempresa.component';
import { SeguridadComponent } from './area-empresa-view/seguridad/seguridad.component';
import { MishotelesComponent } from './area-empresa-view/mishoteles/mishoteles.component';
import { AreaModule } from '../area/area.module';


@NgModule({
  declarations: [
    AreaEmpresaViewComponent,
    AreaempresaComponent,
    SeguridadComponent,
    MishotelesComponent
  ],
  imports: [
    CommonModule,
    AreaModule
  ],
  exports:[
    AreaEmpresaViewComponent

  ]
})
export class AreaEmpresaViewModule { }
