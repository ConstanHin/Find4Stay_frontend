import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const baseUrl = environment.SERVER_URL

export interface User {
  username: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: any;
  private user$: Subject<any>

  constructor(private http: HttpClient) {
    this.user$ = new Subject();
  }

  signup(data: any) {
    this.user = data; //username, password - data
    this.user$.next(this.user)
    return this.http.post(`${baseUrl}/login`, data);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}/users/${name}`)
  }

  add(data: any) {
    return this.http.post(`${baseUrl}/users/`, data)
  }

  getUser$(): Observable<any> {
    this.user$.asObservable().subscribe((v) => console.log(v));

    return this.user$.asObservable();
  }
}
