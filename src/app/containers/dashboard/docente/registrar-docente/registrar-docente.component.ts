import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewDocente, PageDocente } from 'src/app/interfaces/dashboard/docente';
import { DocenteService } from 'src/app/services/dashboard/docente.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.scss']
})
export class RegistrarDocenteComponent implements OnInit{

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

  saveDocente() {
    if (this.myForm.invalid) {
      return;
    }

    const data: NewDocente = this.myForm.value;

    this.docente.saveDocente(data).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/dashboard/docente'])
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
