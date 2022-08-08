import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TooltipExempleComponent } from './tooltip-exemple/tooltip-exemple.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SegundoFormularioComponent } from './segundo-formulario/segundo-formulario.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TooltipExempleComponent,
    FormularioComponent,
    SegundoFormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
