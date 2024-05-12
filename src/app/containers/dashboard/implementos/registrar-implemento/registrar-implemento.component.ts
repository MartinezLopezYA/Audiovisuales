import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewImplemento } from 'src/app/interfaces/dashboard/implementos';
import { ImplementosService } from 'src/app/services/dashboard/implementos.service';
import { ImplementosComponent } from '../implementos.component';

@Component({
  selector: 'app-registrar-implemento',
  templateUrl: './registrar-implemento.component.html',
  styleUrls: ['./registrar-implemento.component.scss']
})
export class RegistrarImplementoComponent implements OnInit {

  myForm!: FormGroup;

  newImplemento!: NewImplemento;

  alertaVisible: boolean = false;
  mensaje: string = '';
  tipo: string = '';

  constructor(
    private implemento: ImplementosService,
    private form: FormBuilder,
    private route: Router,
    private imple: ImplementosComponent
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.form.group({
      codigo: ['', Validators.required],
      implemento: ['', Validators.required],
      caracteristicas: ['', Validators.required],
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

  saveImplemento() {
    if (this.myForm.invalid) {
      return;
    }

    const data: NewImplemento = this.myForm.value;

    this.implemento.saveImplemento(data).subscribe(
      res => {
        this.mostrarAlerta('Implemento Agregado Con Éxito', 'success', () => {
          this.route.navigate(['/dashboard/implementos']);
          this.imple.getAllImplemento();
        })
      },
      error => {
        console.log(error);
      }
    );
  }

  volver() {
    this.mostrarAlerta('Solicitud Cancelada', 'info', () => {
      this.route.navigate(['/dashboard/implementos']);
    })
  }

}

