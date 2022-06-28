import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../../components/message/message.component';
import { NumberToStarsPipe } from 'src/app/pipes/number-to-stars.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from 'src/app/landing-page-view/landing-page-view/buscador/buscador.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MapComponent } from 'src/app/landing-page-view/landing-page-view/map/map.component';



@NgModule({
  declarations: [
    MessageComponent,
    NumberToStarsPipe,
    BuscadorComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [
    MessageComponent,
    NumberToStarsPipe,
    ReactiveFormsModule,
    BuscadorComponent,
    MapComponent
  ]
})
export class ComunModule { }
