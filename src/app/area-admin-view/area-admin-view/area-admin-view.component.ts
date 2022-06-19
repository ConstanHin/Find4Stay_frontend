import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/area/area.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-area-admin-view',
  templateUrl: './area-admin-view.component.html',
  styleUrls: ['./area-admin-view.component.css']
})
export class AreaAdminViewComponent implements OnInit {

  // Determina el componenete que aparece en el contenido
  // TODO: obtenerlo del module?
  apartado: string = "";
  // role: string = "";

  constructor(
    private areaService: AreaService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    // this.role = new AreaService().getRole();
   }

  ngOnInit(): void {
  }

  // Cambio del componente en el contenido
  cambiarApartado(apartado: string) {
    this.apartado = apartado;
    this.router.navigate([`area-admin/${apartado}`])

  }

}
