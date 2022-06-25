import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../../components/message/message.component';
import { NumberToStarsPipe } from 'src/app/pipes/number-to-stars.pipe';



@NgModule({
  declarations: [
    MessageComponent,
    NumberToStarsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent,
    NumberToStarsPipe
  ]
})
export class ComunModule { }
