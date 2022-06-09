import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaAdminEmpresasListasComponent } from './area-admin-empresas-listas/area-admin-empresas-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaAdminEmpresasListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
