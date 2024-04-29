import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.scss']
})
export class NavbarDashboardComponent {

  constructor(
    private route: Router
  ) {}
  
  cerrarSesion() {
      sessionStorage.removeItem('accessToken');
      this.route.navigate(['/login']);
  }

}
