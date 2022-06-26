import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';
import { CardComponent } from './resultado-busqueda-hoteles-view/card/card.component';
import { FiltroComponent } from './resultado-busqueda-hoteles-view/filtro/filtro.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ComunModule } from '../comun/module/comun/comun.module';


@NgModule({
  declarations: [
    ResultadoBusquedaHotelesViewComponent,
    CardComponent,
    FiltroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ComunModule
  ],
  exports: [
    ResultadoBusquedaHotelesViewComponent
  ]
})
export class ResultadoBusquedaHotelesModule { }
