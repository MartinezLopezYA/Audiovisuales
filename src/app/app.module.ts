import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/auth/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DocenteComponent } from './containers/dashboard/docente/docente.component';
import { ImplementosComponent } from './containers/dashboard/implementos/implementos.component';
import { PrestamosComponent } from './containers/dashboard/prestamos/prestamos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarDashboardComponent } from './containers/utils/navbar-dashboard/navbar-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarPrestamoComponent } from './containers/dashboard/prestamos/registrar-prestamo/registrar-prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DocenteComponent,
    ImplementosComponent,
    PrestamosComponent,
    NavbarDashboardComponent,
    RegistrarPrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
