import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';
import { CardComponent } from './resultado-busqueda-hoteles-view/card/card.component';
import { FiltroCategoriaComponent } from './resultado-busqueda-hoteles-view/filtro-categoria/filtro-categoria.component';
import { FiltroPrecioComponent } from './resultado-busqueda-hoteles-view/filtro-precio/filtro-precio.component';



@NgModule({
  declarations: [
    ResultadoBusquedaHotelesViewComponent,
    CardComponent,
    FiltroCategoriaComponent,
    FiltroPrecioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResultadoBusquedaHotelesViewComponent
  ]
})
export class ResultadoBusquedaHotelesModule { }
