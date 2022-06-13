import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-empresa-view',
  templateUrl: './area-empresa-view.component.html',
  styleUrls: ['./area-empresa-view.component.css']
})
export class AreaEmpresaViewComponent implements OnInit {

  apartado: string = "empresa";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.apartado = apartado;
  }
}
