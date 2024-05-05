import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent {

  @Input() mensaje: string = '';
  @Input() tipo: string = '';


  obtenerImagen(tipo: string): string {
    if (tipo === 'success') {
      return '../../../assets/alertas/OK.png';
    } else if (tipo === 'error') {
      return '../../../assets/alertas/incorrecto.png';
    } else {
      return '../../../assets/alertas/info.png';
    }
  }

}
