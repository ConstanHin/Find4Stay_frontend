import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaAdminClientesListaComponent } from './area-admin-clientes-lista/area-admin-clientes-lista.component';

import { RegistroComponent } from './registro/registro.component';
import { MapComponent } from './map/map.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { AreaAdminComponent } from './area-admin/area-admin.component';
import { LogInComponent } from './log-in/log-in.component';
import { FooterComponent } from './footer/footer.component';
import { AreaempresaComponent } from './areaempresa/areaempresa.component';
import { BarraLateralEmpresaComponent } from './barra-lateral-empresa/barra-lateral-empresa.component';
import { AreaAdminClientesComponent } from './area-admin-clientes/area-admin-clientes.component';
import { ResultadoBusquedaHotelesModule } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaAdminClientesListaComponent,
    RegistroComponent,
    MapComponent,
    BarraLateralComponent,
    AreaAdminComponent,
    LogInComponent,
    FooterComponent
    AreaempresaComponent,
    BarraLateralEmpresaComponent,
    AreaAdminClientesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ResultadoBusquedaHotelesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
