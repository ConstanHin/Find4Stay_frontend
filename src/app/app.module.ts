import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaAdminReservasListaComponent } from './area-admin-reservas-lista/area-admin-reservas-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaAdminReservasListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
