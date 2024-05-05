import { Component, OnInit } from '@angular/core';
import { PrestamosService } from 'src/app/services/dashboard/prestamos.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  informacion: any;

  constructor(
    private prestamo: PrestamosService
  ) {

  }
  ngOnInit(): void {
    this.getAllPrestamos();
  }

  getAllPrestamos() {
    this.prestamo.getAllPrestamos().subscribe(
      (data) => {
        console.log(data.dataResult);
        this.informacion = data.dataResult;
      }
    );
  }

}
