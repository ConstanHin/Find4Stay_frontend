import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from 'src/app/area/area.service';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-area-admin-cliente',
  templateUrl: './area-admin-cliente.component.html',
  styleUrls: ['./area-admin-cliente.component.css']
})
export class AreaAdminClienteComponent implements OnInit {
  //Form
  formDetallesCliente = new FormGroup({
    nombre: new FormControl("", Validators.required),
    apellido: new FormControl("", [Validators.required]),
    dni: new FormControl("", [Validators.required, Validators.max(200)]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  cliente: Cliente | undefined;
  disabled: boolean = true;
  mensaje: string | undefined;


  // Inject AreaService and ActivateRoute
  constructor(
    private route: ActivatedRoute,
    private areaService: AreaService,
    private clienteService: ClienteService,
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

  cancelarCambios() {
    // Resetear valores del form con los recibidos por request
    this.formDetallesCliente.reset();
    this.disabled = !this.disabled;

  }

  aceptarCambios() {
    // guardar los cambios
    // enviar un request put a la api para hacer el update
    this.clienteService.update(
      this.cliente?.id,
      this.formDetallesCliente.value
    ).subscribe(
      {
        next: v => {
          console.log(v);

          this.formDetallesCliente.reset;
          //Mostrar mensaje éxito
          this.mostrarMensaje("Se han modificado los datos.")

        },
        error: e => {
          console.log(e);
          //Mostrar mensaje fallo
          this.mostrarMensaje("Error.")
        }
      }

    );
    // TODO: spinner feedaback mientras carga
    this.disabled = !this.disabled;
  }

  mostrarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    setTimeout(() => this.mensaje = undefined, 3500);
  }

}
