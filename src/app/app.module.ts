import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './home/detalle/detalle.component';
import { registerLocaleData} from '@angular/common';

import localeEs from '@angular/common/locales/es';
import { ErrorsComponent } from './errors/errors.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-CL" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
