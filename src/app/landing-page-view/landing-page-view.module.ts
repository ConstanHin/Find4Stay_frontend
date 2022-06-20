import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view.component';
import { DescubreComponent } from './landing-page-view/descubre/descubre.component';
import { BuscadorComponent } from './landing-page-view/buscador/buscador.component';
import { MapComponent } from './landing-page-view/map/map.component';
import { AppRoutingModule } from '../app-routing.module';
import { SlidePhotosComponent } from './landing-page-view/slide-photos/slide-photos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageViewComponent,
    DescubreComponent,
    BuscadorComponent,
    MapComponent,
    SlidePhotosComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule
  ],
  exports:[
    LandingPageViewComponent
  ]
})
export class LandingPageViewModule { }
