import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';



@NgModule({
  declarations: [
    BarraLateralComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarraLateralComponent
  ]
})
export class AreaModule { }
