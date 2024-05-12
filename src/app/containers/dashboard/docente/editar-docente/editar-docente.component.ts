import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Docente, NewDocente } from 'src/app/interfaces/dashboard/docente';
import { DocenteService } from 'src/app/services/dashboard/docente.service';
import { DocenteComponent } from '../docente.component';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.scss']
})
export class EditarDocenteComponent implements OnInit{
  
  myForm!: FormGroup;
  newDocente!: NewDocente;

  alertaVisible: boolean = false;
  mensaje: string = '';
  tipo: string = '';

  constructor(
    private docente: DocenteService,
    private form: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.form.group({
      cedulaDocente: ['', Validators.required],
      nombre: ['', Validators.required],
      facultad: ['', Validators.required],
      clase: ['', Validators.required],
    })
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

  updateDocente() {
    if (this.myForm.invalid) {
      return;
    }

    const data: NewDocente = this.myForm.value;

    this.docente.updateDocente(data).subscribe(
      res => {
        this.mostrarAlerta('Docente Actualizado Con Éxito', 'success', () => {
          this.route.navigate(['/dashboard/docente']);
        })
      },
      error => {
        this.mostrarAlerta('No Fue Posible Actualizar El Docente', 'error', () => {
          this.route.navigate(['/dashboard/docente/editar-doente']);
        })
      }
    );
  }

  volver() {
    this.mostrarAlerta('Solicitud Cancelada', 'info', () => {
      this.route.navigate(['/dashboard/docente']);
    })
  }

}