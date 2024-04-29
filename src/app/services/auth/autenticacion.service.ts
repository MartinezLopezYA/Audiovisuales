import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Autenticacion } from 'src/app/interfaces/auth/autenticacion';
import { API_URL } from 'src/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private url = API_URL

  constructor(private http: HttpClient) { }

  login(cedulaEncargado: string, clave: string): Observable<any> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return this.http.post<Autenticacion>(this.url + '/login', { cedulaEncargado, clave}, {...httpOptions, observe: 'response'})
    .pipe(tap());
  }

}
