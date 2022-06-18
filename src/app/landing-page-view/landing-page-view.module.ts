import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view.component';
import { DescubreComponent } from './landing-page-view/descubre/descubre.component';
import { BuscadorComponent } from './landing-page-view/buscador/buscador.component';
import { MapComponent } from './landing-page-view/map/map.component';
import { AppRoutingModule } from '../app-routing.module';
import { SlidePhotosComponent } from './landing-page-view/slide-photos/slide-photos.component';
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
    FormsModule
  ],
  exports:[
    LandingPageViewComponent
  ]
})
export class LandingPageViewModule { }
