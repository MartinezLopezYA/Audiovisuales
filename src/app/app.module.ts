import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/auth/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DocenteComponent } from './containers/dashboard/docente/docente.component';
import { ImplementosComponent } from './containers/dashboard/implementos/implementos.component';
import { PrestamosComponent } from './containers/dashboard/prestamos/prestamos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DocenteComponent,
    ImplementosComponent,
    PrestamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
