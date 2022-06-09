import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';
import { CardComponent } from './resultado-busqueda-hoteles-view/card/card.component';
import { FiltroComponent } from './resultado-busqueda-hoteles-view/filtro/filtro.component';



@NgModule({
  declarations: [
    ResultadoBusquedaHotelesViewComponent,
    CardComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResultadoBusquedaHotelesViewComponent
  ]
})
export class ResultadoBusquedaHotelesModule { }
