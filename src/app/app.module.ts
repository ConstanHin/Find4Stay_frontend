import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaAdminClientesListaComponent } from './area-admin-clientes-lista/area-admin-clientes-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaAdminClientesListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
