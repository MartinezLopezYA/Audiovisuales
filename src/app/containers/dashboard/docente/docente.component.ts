import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private docente: DocenteService,
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

  getAllDocente() {
    this.docente.getDocentes(this.currentPage, 10).subscribe(
      data => {
        this.informacion = data;
        console.log(this.informacion);
      }
    );
  }

  deleteDocente() {
    if (this.docenteSeleccionado == null) {
      alert('Seleccione un docente');
    } else {
      this.docente.deleteDocente(this.docenteSeleccionado.cedulaDocente).subscribe(
        () => {
          console.log('Usuario Eliminado');
          this.getAllDocente();
        }
      );
    }
  }

  seleccionarDocente(docente: Docente): void {
    this.docenteSeleccionado = this.docenteSeleccionado === docente ? null : docente;
  }

}
