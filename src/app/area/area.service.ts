import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  role: string = "admin";
  apartado: string = "cuenta"
  cliente: Cliente| undefined;

  constructor() {
  }

  getRoleArea() {
    return this.role;
  }

  setRoleArea(role: string) {
    this.role = role;
  }

  getCliente() {
    return this.cliente;
  }

  setCliente(cliente: Cliente) {
    this.cliente = cliente;
  }
  getApartado() {
    return this.apartado;
  }

  setApartado(apartado: string) {
    this.apartado = apartado;
  }

}
