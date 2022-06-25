import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  apiUrl: string = "http://localhost:8080/api/empresas";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

   // Get list
   list(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/`).pipe(
      catchError(this.handleError)
    );
  }


   // Get one by id
   getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create new by admin
  create(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Create new by guest
  crearByGuest(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/guest`, data).pipe(
      catchError(this.handleError)
    )
  }

  // Update
  update(id:any, data:any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  //Get by cuenta
  getByCuenta(cuenta: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?cuenta_like=${cuenta}`).pipe(

    )
  }

  //Get by codigo_empresa
  getByCodigoEmpresa(codigo_empresa: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?codigo_empresa_like=${codigo_empresa}`).pipe(

    )
  }

  getempresaauth(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/auth`).pipe(
      catchError(this.handleError)
    )
  }

  //Handle errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ha ocurrido un error: ', error.error.message)
    } else {
      console.error(
        `Backend  returned code ${error.status},
        body was: ${error.error}`
      )
    }
    return throwError(() => new Error('Ha ocurrido un error, intentelo de nuevo más tarde.'));
  }

}
