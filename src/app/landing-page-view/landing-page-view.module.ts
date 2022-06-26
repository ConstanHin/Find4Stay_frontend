import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view.component';
import { DescubreComponent } from './landing-page-view/descubre/descubre.component';
import { AppRoutingModule } from '../app-routing.module';
import { SlidePhotosComponent } from './landing-page-view/slide-photos/slide-photos.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from '../comun/module/comun/comun.module';



@NgModule({
  declarations: [
    LandingPageViewComponent,
    DescubreComponent,
    SlidePhotosComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    ComunModule,
  ],
  exports:[
    LandingPageViewComponent
  ]
})
export class LandingPageViewModule { }
