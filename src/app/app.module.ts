import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from "./dashboard/dashboard.module";

import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO'; // Importa los datos de localización para es-CO
registerLocaleData(localeEsCO, 'es-CO'); // Registra los datos de localización para es-CO


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule
    ]
})
export class AppModule { }
