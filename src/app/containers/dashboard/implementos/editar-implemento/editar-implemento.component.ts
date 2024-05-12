import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewImplemento } from 'src/app/interfaces/dashboard/implementos';
import { ImplementosService } from 'src/app/services/dashboard/implementos.service';
import { ImplementosComponent } from '../implementos.component';

@Component({
  selector: 'app-editar-implemento',
  templateUrl: './editar-implemento.component.html',
  styleUrls: ['./editar-implemento.component.scss']
})
export class EditarImplementoComponent implements OnInit {

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
    console.log(this.myForm.value)
  }

  initForm() {
    this.myForm = this.form.group({
      codigo: [this.imple.implementoSeleccionado?.codigo.toString(), Validators.required],
      implemento: [this.imple.implementoSeleccionado?.implemento, Validators.required],
      caracteristicas: [this.imple.implementoSeleccionado?.caracteristicas, Validators.required],
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

  updateImplemento() {
    if (this.myForm.invalid) {
      return;
    }
    const data: NewImplemento = this.myForm.value;

    this.implemento.updateImplemento(data).subscribe(
      res => {
        this.mostrarAlerta('Implemento Actualizado Con Éimpleito', 'success', () => {
          this.route.navigate(['/dashboard/implementos']);
          this.imple.getAllImplemento();
        })
      },
      error => {
        this.mostrarAlerta('No Fue Posible Actualizar El Implemento', 'error', () => {
          this.route.navigate(['/dashboard/implemento/editar-doente']);
        })
      }
    );
  }

  volver() {
    this.mostrarAlerta('Solicitud Cancelada', 'info', () => {
      this.route.navigate(['/dashboard/implementos']);
    })
  }

}
