import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;
  username: string| undefined;

  constructor(private httpCliente: HttpClient) { }

  /**
   * Login endpoint
   * @param username
   * @param password
   * @returns
   */
  login(username: string, password: string): Observable<any> {
    return this.httpCliente.post(AUTH_API + 'login', {
      username: username,
      password: password
    });
  }

  /**
   * Logout user, erase sessionStorage
   */
  logout() {
    this.isAuth = false;
    this.username = undefined;
    window.sessionStorage.clear()

  }

  /**
   * Register endpoint
   * @param username
   * @param password
   * @param email
   * @returns
   */
  register(username: string, password: string, email: string): Observable<any> {
    return this.httpCliente.post(AUTH_API + 'signup', {
      username: username,
      password: password,
      email: email
    });
  }

  /**
   * Check if user is authenticated or not
   */
  isAuthenticated(): boolean {
    return this.isAuth;
  }

  /**
   * Set if user is authenticated or not
   */
  setAuthenticated(auth: boolean) {
    this.isAuth = auth;
  }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(){
    return this.username;
  }

}
