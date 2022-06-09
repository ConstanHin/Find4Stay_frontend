import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaAdminHotelesListasComponent } from './area-admin-hoteles-listas/area-admin-hoteles-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaAdminHotelesListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
