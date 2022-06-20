import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ResultadoBusquedaHotelesModule } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles/resultado-busqueda-hoteles-view/resultado-busqueda-hoteles-view.component';
import { LandingPageViewModule } from './landing-page-view/landing-page-view.module';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view/landing-page-view.component';
import { LogInViewModule } from './log-in-view/log-in-view.module';
import { AreaEmpresaViewModule } from './area-empresa-view/area-empresa-view.module';
import { AreaAdminViewModule } from './area-admin-view/area-admin-view.module';
import { FooterComponent } from './footer/footer.component';
import { AreaClienteViewModule } from './area-cliente-view/area-cliente-view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'

registerLocaleData(localeEs)


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LandingPageViewComponent},
      {path:'resultado-busqueda', component: ResultadoBusquedaHotelesViewComponent}
    ]),
    AppRoutingModule,
    FormsModule,
    ResultadoBusquedaHotelesModule,
    LandingPageViewModule,
    LogInViewModule,
    AreaEmpresaViewModule,
    AreaClienteViewModule,
    AreaAdminViewModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {
    provide: LOCALE_ID,
    useValue: 'es-ES'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {}
