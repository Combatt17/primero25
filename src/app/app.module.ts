import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulo del cliente http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './consumo/equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Importamos el modulo para utilizarlo en el service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
