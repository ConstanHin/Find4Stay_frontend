import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaempresaComponent } from './areaempresa/areaempresa.component';
import { BarraLateralEmpresaComponent } from './barra-lateral-empresa/barra-lateral-empresa.component';
import { AreaAdminClientesComponent } from './area-admin-clientes/area-admin-clientes.component';
import { ResultadoBusquedaHotelesModule } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaempresaComponent,
    BarraLateralEmpresaComponent,
    AreaAdminClientesComponent,
    NavbarComponent
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
