import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewDocente } from 'src/app/interfaces/dashboard/docente';
import { DocenteService } from 'src/app/services/dashboard/docente.service';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.scss']
})
export class EditarDocenteComponent implements OnInit{
  myForm!: FormGroup;

  newDocente!: NewDocente;

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

  updateDocente() {
    if (this.myForm.invalid) {
      return;
    }

    const data: NewDocente = this.myForm.value;

    this.docente.updateDocente(data).subscribe(
      res => {
        console.log(res);
        console.log(data);
        this.route.navigate(['/dashboard/docente']);
      },
      error => {
        console.log(error);
      }
    );
  }

  volver() {
    this.route.navigate(['/dashboard/docente'])
  }

}