import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrestamosUpdate } from 'src/app/interfaces/dashboard/prestamos';
import { PrestamosService } from 'src/app/services/dashboard/prestamos.service';
import { PrestamosComponent } from '../prestamos.component';

@Component({
  selector: 'app-editar-prestamo',
  templateUrl: './editar-prestamo.component.html',
  styleUrls: ['./editar-prestamo.component.scss']
})
export class EditarPrestamoComponent implements OnInit {
  
  myForm!: FormGroup;
  newPrestamo!: PrestamosUpdate;

  alertaVisible: boolean = false;
  mensaje: string = '';
  tipo: string = '';
  
  constructor(
    private service: PrestamosService,
    private form: FormBuilder,
    private route: Router,
    private pres : PrestamosComponent
  ) {}
  

  ngOnInit(): void {
    this.initForom();
    console.log(this.pres.prestamoSeleccionado.salon)
    console.log(this.pres.prestamoSeleccionado.updatedAt)
    console.log(this.pres.prestamoSeleccionado.codigoRel)
  }

  initForom(){
    this.myForm = this.form.group({
      idPrestamo: [this.pres.prestamoSeleccionado.idPrestamo, Validators.required],
      fecha: [this.pres.prestamoSeleccionado.fecha, Validators.required],
      salon : [this.pres.prestamoSeleccionado.salon, Validators.required],
      estado : [this.pres.prestamoSeleccionado.estado, Validators.required],
      observacion : [this.pres.prestamoSeleccionado.observacion, Validators.required],
      cedulaEncargado : [this.pres.prestamoSeleccionado.cedulaEncargado, Validators.required],
      codigoRel : [this.pres.prestamoSeleccionado.codigo, Validators.required],
      cedulaDocente : [this.pres.prestamoSeleccionado.cedulaDocente, Validators.required],
    });
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

  updatePrestamo() {
    if (this.myForm.invalid) {
      return;
    }

    const data: PrestamosUpdate = this.myForm.value;

    this.service.savePrestamo(data).subscribe(
      res => {
        this.mostrarAlerta('Prestamo Actualizado Con Éxito', 'success', () => {
          this.route.navigate(['/dashboard/prestamos']);
          this.pres.getAllPrestamos();
        })
      },
      error => {
        this.mostrarAlerta('No Fue Posible Actualizar El Prestamo', 'error', () => {
          this.route.navigate(['/dashboard/prestamos/editar-prestamo']);
        })
      }
    );
  }
  
  volver() {
    this.mostrarAlerta('Solicitud Cancelada', 'info', () => {
      this.route.navigate(['/dashboard/prestamos']);
    })
  }

}