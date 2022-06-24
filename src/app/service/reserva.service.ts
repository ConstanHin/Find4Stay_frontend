import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

apiUrl: string = "http://localhost:8080/api/reservas";
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

// Create new
create(data: any): Observable<any> {
  return this.httpClient.post(this.apiUrl, data).pipe(
    catchError(this.handleError)
  );
}

// Update
update(id:any, data:any): Observable<any> {
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

getReservaByClienteId(): Observable<any>{
  return this.httpClient.get(`${this.apiUrl}/cliente`).pipe(
    catchError(this.handleError)
  )
}

//Get by hotel
getByHotel(hotel: any): Observable<any> {
  return this.httpClient.get(`${this.apiUrl}?hotel_like=${hotel}`).pipe(

  )
}

//Get by apellido
getByCliente(cliente: any): Observable<any> {
  return this.httpClient.get(`${this.apiUrl}?cliente_like=${cliente}`).pipe(

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
