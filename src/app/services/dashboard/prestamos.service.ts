import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamos } from 'src/app/interfaces/dashboard/prestamos';
import { API_URL } from 'src/enviroments';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private url = API_URL

  constructor(
    private http: HttpClient
  ) { }

  getAllPrestamos() : Observable<any>{
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.get<any>(this.url + '/prestamo?page=1&size=10&search=ninguna', httpOptions);
  }

  savePrestamo(prestamo: Prestamos): Observable<Prestamos> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.post<Prestamos>(this.url + '/prestamo', prestamo , httpOptions);
  }
}
