import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Map1Service {

  map: any;
  mapaPuntoMedio: any;
  mapInitiated = false;
  tileLayer: any;

  apiUrl: string = "http://localhost:8080/api/hoteles";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(catchError(this.handleError));
  }
  filterByPoblacion(name: any): Observable<any> {
    return this.httpClient
    .get(`${this.apiUrl}?name_like=${name}`)
    .pipe(catchError(this.handleError));
  }



}


