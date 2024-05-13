import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagePrestamo, Prestamos, PrestamosUpdate } from 'src/app/interfaces/dashboard/prestamos';
import { PrestamosService } from 'src/app/services/dashboard/prestamos.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  informacion!: any;
  currentPage: number = 1;
  
  prestamoSeleccionado: any = {};
  alertaVisible: boolean = false;
  mensaje: string = '';
  tipo: string = '';

  constructor(
    private prestamo: PrestamosService,
    private route: Router
  ) {

  }
  ngOnInit(): void {
    console.log(this.prestamoSeleccionado);
    this.getAllPrestamos();
  }

  nextPage() {
    if (this.currentPage < this.informacion.totalPages) {
      this.currentPage ++;
      this.getAllPrestamos();
    }
  }

  prevPage() {
    if (this.currentPage < 1) {
      this.currentPage --;
      this.getAllPrestamos();
    }
  }

  mostrarAlerta(mensaje: string, tipo: string, callback: Function) {
    this.mensaje = mensaje;
    this.tipo = tipo;
    this.alertaVisible = true;
    setTimeout(() => {
      this.alertaVisible = false;
      if (callback) {
        callback();
      }
    }, 2000);
  }

  getAllPrestamos() {
    this.prestamo.getAllPrestamos().subscribe(
      (data) => {
        this.informacion = data.dataResult;
      console.log(this.informacion);  
      }
    );
  }

  deletePrestamo() {
    if (this.prestamoSeleccionado.idPrestamo == null) {
      this.mostrarAlerta('Debe Seleccionar Un Prestamo', 'error', () => {
        this.route.navigate(['/dashboard/prestamos']);
      })
    } else {
      this.prestamo.deletePrestamo(this.prestamoSeleccionado.idPrestamo).subscribe(
        () => {
          this.mostrarAlerta('Prestamo Eliminado con Éxito', 'success', () => {
            this.route.navigate(['/dashboard/prestamos']);
          })
          this.getAllPrestamos();
        }
      )
    }
  }

  seleccionarPrestamo(prestamo: any): void {
    this.prestamoSeleccionado = this.prestamoSeleccionado === prestamo ? null : prestamo;
}


}
