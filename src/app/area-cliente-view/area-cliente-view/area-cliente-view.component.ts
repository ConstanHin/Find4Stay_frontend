import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-cliente-view',
  templateUrl: './area-cliente-view.component.html',
  styleUrls: ['./area-cliente-view.component.css']
})
export class AreaClienteViewComponent implements OnInit {

  apartado: string = "cliente";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.apartado = apartado;
  }
}
