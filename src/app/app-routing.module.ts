import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DocenteComponent } from './containers/dashboard/docente/docente.component';
import { ImplementosComponent } from './containers/dashboard/implementos/implementos.component';
import { PrestamosComponent } from './containers/dashboard/prestamos/prestamos.component';
import { LoginComponent } from './containers/auth/login/login.component';
import { RegistrarPrestamoComponent } from './containers/dashboard/prestamos/registrar-prestamo/registrar-prestamo.component';
import { RegistrarDocenteComponent } from './containers/dashboard/docente/registrar-docente/registrar-docente.component';
import { EditarDocenteComponent } from './containers/dashboard/docente/editar-docente/editar-docente.component';
import { RegistrarImplementoComponent } from './containers/dashboard/implementos/registrar-implemento/registrar-implemento.component';
import { EditarImplementoComponent } from './containers/dashboard/implementos/editar-implemento/editar-implemento.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent, 
    children: [
      { path: 'prestamos', component: PrestamosComponent, 
      children: [
        { path: 'registrar-prestamo', component: RegistrarPrestamoComponent },
      ] },
      { path: 'docente', component: DocenteComponent ,
        children: [
          { path: 'registrar-docente', component: RegistrarDocenteComponent},
          { path: 'editar-docente', component: EditarDocenteComponent },
        ]
      },
      { path: 'implementos', component: ImplementosComponent,
        children: [
          { path: 'registrar-implemento', component: RegistrarImplementoComponent},
          { path: 'editar-implemento', component: EditarImplementoComponent },
        ]
       }
    ]},

  // { path: '', redirectTo: '/dashboard/docente', pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
