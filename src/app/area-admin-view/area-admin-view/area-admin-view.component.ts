import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/area/area.service';

@Component({
  selector: 'app-area-admin-view',
  templateUrl: './area-admin-view.component.html',
  styleUrls: ['./area-admin-view.component.css']
})
export class AreaAdminViewComponent implements OnInit {

  // Determina el componenete que aparece en el contenido
  apartado: string = "clientes";
  // role: string = "";

  constructor(private areaService: AreaService) {
    // this.role = new AreaService().getRole();
   }

  ngOnInit(): void {
  }

  // Cambio del componente en el contenido
  cambiarApartado(apartado: string) {
    this.apartado = apartado;
    console.log(apartado, ":apartado");

  }

}
