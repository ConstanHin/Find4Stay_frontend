import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-admin-view',
  templateUrl: './area-admin-view.component.html',
  styleUrls: ['./area-admin-view.component.css']
})
export class AreaAdminViewComponent implements OnInit {

  apartado: string = "clientes";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.apartado = apartado;
  }

}
