import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  apiUrl: string = "http://localhost:8080/api/cuentas";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get list
  list(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`).pipe(
      catchError(this.handleError)
    );
  }


  // Get one by id
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create new
  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Update
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(this.apiUrl + `/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  //Get by username
  getByNombre(username: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?username_like=${username}`).pipe(
      catchError(this.handleError)
    )
  }

  //Get by role
  getByApellido(role: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?role_like=${role}`).pipe(
      catchError(this.handleError)
    )
  }

  getauthcuenta(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/auth`).pipe(
      catchError(this.handleError)
    )
  }

  editCuentaAuth(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/auth`, data).pipe(
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
    return throwError(() => new Error('Ha ocurrido un error: .' + error.message));
  }


}
