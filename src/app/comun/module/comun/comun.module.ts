import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../../components/message/message.component';
import { NumberToStarsPipe } from 'src/app/pipes/number-to-stars.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MessageComponent,
    NumberToStarsPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MessageComponent,
    NumberToStarsPipe,
    ReactiveFormsModule
  ]
})
export class ComunModule { }
