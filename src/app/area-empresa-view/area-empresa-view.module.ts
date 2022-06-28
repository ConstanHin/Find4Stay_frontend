import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaEmpresaViewComponent } from './area-empresa-view/area-empresa-view.component';
import { AreaempresaComponent } from './area-empresa-view/areaempresa/areaempresa.component';
import { SeguridadComponent } from './area-empresa-view/seguridad/seguridad.component';
import { MishotelesComponent } from './area-empresa-view/mishoteles/mishoteles.component';
import { AreaModule } from '../area/area.module';
import { ComunModule } from '../comun/module/comun/comun.module';
import { TarjetaHotelComponent } from './tarjeta-hotel/tarjeta-hotel.component';


@NgModule({
  declarations: [
    AreaEmpresaViewComponent,
    AreaempresaComponent,
    SeguridadComponent,
    MishotelesComponent,
    TarjetaHotelComponent,
  ],
  imports: [
    CommonModule,
    AreaModule,
    ComunModule
  ],
  exports:[
    AreaEmpresaViewComponent

  ]
})
export class AreaEmpresaViewModule { }
