import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DocenteComponent } from './containers/dashboard/docente/docente.component';
import { ImplementosComponent } from './containers/dashboard/implementos/implementos.component';
import { PrestamosComponent } from './containers/dashboard/prestamos/prestamos.component';
import { LoginComponent } from './containers/auth/login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent, 
    children: [
      { path: 'docente', component: DocenteComponent },
      { path: 'implementos', component: ImplementosComponent },
      { path: 'prestamos', component: PrestamosComponent }
    ]},

  // { path: '', redirectTo: '/dashboard/docente', pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
