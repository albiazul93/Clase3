import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { FormsModule } from '@angular/forms';
import { PersonaService } from './services/persona.service';
import { PersonaContenedorComponent } from './personas/persona-contenedor/persona-contenedor.component';
import { PersonaBajaComponent } from './personas/persona-baja/persona-baja.component';

@NgModule({
  declarations: [AppComponent, PersonaListadoComponent, PersonaAltaComponent, PersonaContenedorComponent, PersonaBajaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
