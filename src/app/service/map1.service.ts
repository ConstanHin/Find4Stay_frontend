// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class Map1Service {
//   apiUrl: string = "http://localhost:8080/api/hoteles";
//   headers = new HttpHeaders().set('Content-Type', 'application/json');

//   constructor(private httpClient: HttpClient) { }



//   //Get list
//   list(): Observable<any> {
//     return this.httpClient.get(this.apiUrl).pipe(catchError(this.handleError));
//   }


//   //Get por poblacion
//    filterByPoblacion(name: any): Observable<any> {
//     return this.httpClient
//     .get(`${this.apiUrl}?name_like=/${name}`)
//     .pipe(catchError(this.handleError));
//   }


//   //Handle errores
//   handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       console.error('Ha ocurrido un error: ', error.error.message)
//     } else {
//       console.error(
//         `Backend  returned code ${error.status},
//         body was: ${error.error}`
//       )
//     }
//     return throwError(() => new Error('Ha ocurrido un error: .' + error.message));
//   }



// }


