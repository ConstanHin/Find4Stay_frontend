import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl: string = "http://localhost:8080/api/clientes";
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  // Get list
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
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
    return this.httpClient.post(this.apiUrl, data).pipe(
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

  //Get by nombre
  getByNombre(nombre: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?nombre_like=${nombre}`).pipe(

    )
  }

  //Get by apellido
  getByApellido(apellido: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?apellido_like=${apellido}`).pipe(

    )
  }

  //Handle errors
  handleError(error: HttpErrorResponse) {
    let errorMessage = ""

    // Set error
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Ha ocurrido un error: ' + error.error.message;
      console.error(errorMessage)
    } else {
      errorMessage = `Backend returned code ${error.status},
      body was: ${error.error},
      error message: ${error.message}`
      console.error(errorMessage)
    }

    return throwError(() => new Error(errorMessage));
  }
}


