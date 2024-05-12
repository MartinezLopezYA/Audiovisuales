import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Docente, NewDocente, PageDocente } from 'src/app/interfaces/dashboard/docente';
import { DocenteService } from 'src/app/services/dashboard/docente.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit{
  
  myForm!: FormGroup;
  
  informacion!: PageDocente;
  currentPage: number = 1;
  newDocente!: NewDocente;

  docenteSeleccionado: Docente | null = null;

  alertaVisible: boolean = false;
  mensaje: string = '';
  tipo: string = '';

  constructor(
    private docente: DocenteService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllDocente();
  }

  nextPage() {
    if (this.currentPage < this.informacion.totalPages) {
      this.currentPage ++;
      this.getAllDocente();
    }
  }

  prevPage() {
    if (this.currentPage < 1) {
      this.currentPage --;
      this.getAllDocente();
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

  getAllDocente() {
    this.docente.getDocentes(this.currentPage, 10).subscribe(
      data => {
        this.informacion = data;
        
      }
    );
  }

  deleteDocente() {
    if (this.docenteSeleccionado == null) {
      this.mostrarAlerta('Debe Seleccionar Un Docente', 'error', () => {
        this.route.navigate(['/dashboard/docente']);
      })
    } else {
      this.docente.deleteDocente(this.docenteSeleccionado.cedulaDocente).subscribe(
        () => {
          this.mostrarAlerta('Docente Eliminado Con Éxito', 'success', () => {
            this.route.navigate(['/dashboard/docente']);
          })
          this.getAllDocente();
        }
      );
    }
  }

  seleccionarDocente(docente: Docente): void {
    this.docenteSeleccionado = this.docenteSeleccionado === docente ? null : docente;
  }

}
