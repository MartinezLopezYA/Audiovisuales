import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Implementos, NewImplemento, PageImplementos } from 'src/app/interfaces/dashboard/implementos';
import { API_URL } from 'src/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ImplementosService {

  private url = API_URL

  constructor(private http: HttpClient) { }

  getImplementos(page: number, size: number): Observable<PageImplementos> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.get<PageImplementos>(this.url + `/implemento?page=${page}&size=${size}`, httpOptions);
  }

  saveImplemento(implemento: NewImplemento): Observable<NewImplemento> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.post<NewImplemento>(this.url + `/implemento`, implemento, httpOptions);
  }

  updateImplemento(implemento: NewImplemento): Observable<NewImplemento> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.put<NewImplemento>(this.url + `/implemento`, implemento, httpOptions);
  }

  deleteImplemento(codigo: string): Observable<Implementos>{
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    };
    return this.http.delete<Implementos>(this.url + `/implemento?q=${codigo}`, httpOptions);
  }

}
