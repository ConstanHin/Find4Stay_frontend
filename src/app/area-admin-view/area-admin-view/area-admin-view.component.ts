import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/area/area.service';

@Component({
  selector: 'app-area-admin-view',
  templateUrl: './area-admin-view.component.html',
  styleUrls: ['./area-admin-view.component.css']
})
export class AreaAdminViewComponent implements OnInit {

  // Determina el componenete que aparece en el contenido
  apartado: string = "cuenta";
  role: string = "";

  constructor(private areaService: AreaService) {
    // this.role = new AreaService().getRole();
   }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.apartado = apartado;
  }

}
