import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInViewComponent } from './log-in-view/log-in-view.component';
import { LogInComponent } from './log-in-view/log-in/log-in.component';




@NgModule({
  declarations: [
    LogInViewComponent,
    LogInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogInViewComponent
  ]
})
export class LogInViewModule { }
