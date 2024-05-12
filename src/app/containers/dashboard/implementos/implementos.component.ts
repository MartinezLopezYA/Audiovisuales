import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Implementos, NewImplemento, PageImplementos, UpdateImplemento } from 'src/app/interfaces/dashboard/implementos';
import { ImplementosService } from 'src/app/services/dashboard/implementos.service';

@Component({
  selector: 'app-implementos',
  templateUrl: './implementos.component.html',
  styleUrls: ['./implementos.component.scss']
})
export class ImplementosComponent implements OnInit {

  myForm!: FormGroup;
  
  informacion!: PageImplementos;
  currentPage: number = 1;
  newImplemento!: NewImplemento;
  
  implementoSeleccionado: Implementos | null = null;
  
  alertaVisible: boolean = false;
  mensaje: string = '';
  tipo: string = '';

  constructor(
    private implemento: ImplementosService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllImplemento();
  }

  nextPage() {
    if (this.currentPage < this.informacion.totalPages) {
      this.currentPage ++;
      this.getAllImplemento();
    }
  }

  prevPage() {
    if (this.currentPage < 1) {
      this.currentPage --;
      this.getAllImplemento();
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

  getAllImplemento() {
    this.implemento.getImplementos(this.currentPage, 10).subscribe(
      data => {
        this.informacion = data;
      }
    );
  }

  deleteImplemento() {
    if (this.implementoSeleccionado == null) {
      this.mostrarAlerta('Debe Seleccionar Un Implemento', 'error', () => {
        this.route.navigate(['/dashboard/implementos']);
      })
    } else {
      this.implemento.deleteImplemento(this.implementoSeleccionado.codigo).subscribe(
        () => {
          this.mostrarAlerta('Implemento Eliminado Con Éxito', 'success', () => {
            this.route.navigate(['/dashboard/implementos']);
          })
          this.getAllImplemento();
        }
      );
    }
  }

  seleccionarImplemento(implemento: Implementos): void {
    this.implementoSeleccionado = this.implementoSeleccionado === implemento ? null : implemento;
  }

}

