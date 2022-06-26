import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from 'src/app/area/area.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-area-admin-cliente',
  templateUrl: './area-admin-cliente.component.html',
  styleUrls: ['./area-admin-cliente.component.css']
})
export class AreaAdminClienteComponent implements OnInit {
  //formDetallesCliente
  formDetallesCliente = new FormGroup({
    nombre: new FormControl("", Validators.required),
    apellido: new FormControl("", [Validators.required]),
    dni: new FormControl("", [Validators.required, Validators.max(200)]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  cliente: Cliente | undefined;
  disabled: boolean = true;


  // Inject AreaService and ActivateRoute
  constructor(
    private route: ActivatedRoute,
    private areaService: AreaService,
  ) { }

  ngOnInit(): void {
    // Obtener el id desde el parametro de la ruta
    // this.getCliente(Number(this.route.snapshot.paramMap.get('id')))
    this.cliente = this.areaService.getCliente();
  }

  getCliente(id: number) {
    // utilizar area service para obtener los datos del cliente segun id?
    console.log('id:', id);

  }
  editar() {
    this.disabled = !this.disabled;
  }



}
