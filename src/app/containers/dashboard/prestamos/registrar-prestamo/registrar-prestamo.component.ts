import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prestamos } from 'src/app/interfaces/dashboard/prestamos';
import { PrestamosService } from 'src/app/services/dashboard/prestamos.service';
import { PrestamosComponent } from '../prestamos.component';

@Component({
  selector: 'app-registrar-prestamo',
  templateUrl: './registrar-prestamo.component.html',
  styleUrls: ['./registrar-prestamo.component.scss']
})
export class RegistrarPrestamoComponent implements OnInit {

  myForm!: FormGroup;

  alertaVisible: boolean = false;
  mensaje: string = '';
  tipo: string = '';
  newPrestamo!: Prestamos;
  
  constructor(private route: Router,
    private service: PrestamosService,
    private form: FormBuilder,
    private pres : PrestamosComponent
  ) {}
  

  ngOnInit(): void {
    this.initForom();
  }

  initForom(){
    this.myForm = this.form.group({
      fecha: ['', Validators.required],
      salon : ['', Validators.required],
      estado : ['', Validators.required],
      observacion : ['', Validators.required],
      cedulaEncargado : ['', Validators.required],
      codigoRel : ['', Validators.required],
      cedulaDocente : ['', Validators.required],
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

  savePrestamo() {
    if (this.myForm.invalid) {
      return;
    }

    const data: Prestamos = this.myForm.value;

    this.service.savePrestamo(data).subscribe(
      res => {
        this.mostrarAlerta('Prestamo Registrado Con Éxito', 'success', () => {
          this.route.navigate(['/dashboard/prestamos']);
          this.pres.getAllPrestamos();
        })
      },
      error => {
        console.log(error);
      }
    );
  }
  
  volver() {
    this.mostrarAlerta('Solicitud Cancelada', 'info', () => {
      this.route.navigate(['/dashboard/prestamos']);
    })
  }

}
