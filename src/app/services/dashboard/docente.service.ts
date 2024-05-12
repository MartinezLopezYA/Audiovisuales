import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente, NewDocente, PageDocente } from 'src/app/interfaces/dashboard/docente';
import { API_URL } from 'src/enviroments';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

//https://www.ppscolombia.com/back-test/api/sAudioV/docente?page=1&size=10&search=pr
  private url = API_URL

  constructor(private http: HttpClient) { }

  getDocentes(page: number, size: number): Observable<PageDocente> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.get<PageDocente>(this.url + `/docente?page=${page}&size=${size}`, httpOptions);
  }

  saveDocente(docente: NewDocente): Observable<NewDocente> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.post<NewDocente>(this.url + `/docente`, docente, httpOptions);
  }

  updateDocente(docente: NewDocente): Observable<NewDocente> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.put<NewDocente>(this.url + `/docente`, docente, httpOptions);
  }

  deleteDocente(cedula: number): Observable<Docente>{
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.delete<Docente>(this.url + `/docente?q=${cedula}`, httpOptions);
  }

}
