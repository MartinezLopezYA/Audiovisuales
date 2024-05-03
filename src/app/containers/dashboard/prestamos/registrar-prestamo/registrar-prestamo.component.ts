import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-prestamo',
  templateUrl: './registrar-prestamo.component.html',
  styleUrls: ['./registrar-prestamo.component.scss']
})
export class RegistrarPrestamoComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.initForom();
  }

  initForom(){
    this.myForm = new FormGroup({
      // username: new FormControl(null, [Validators.required]),
      // password: new FormControl(null, [Validators.required])
    });
  }
  
  volver() {
    this.route.navigate(['/dashboard/prestamos'])
  }

}
