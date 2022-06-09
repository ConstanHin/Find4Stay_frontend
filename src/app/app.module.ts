import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadoBusquedaHotelesModule } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles.module';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResultadoBusquedaHotelesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
