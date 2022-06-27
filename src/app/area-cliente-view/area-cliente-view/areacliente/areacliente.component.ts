import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { CuentaService } from 'src/app/service/cuenta.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-areacliente',
  templateUrl: './areacliente.component.html',
  styleUrls: ['./areacliente.component.css']
})
export class AreaclienteComponent implements OnInit {

  id?: any;
  email?: any;
  data: any = {"id":""};
  datocliente: any = {"nombre":"", "apellido": "", "dni": ""};

  disabled: boolean = true;

  formEditUser = new FormGroup({
    nombre: new FormControl(this.datocliente.nombre, Validators.required),
    apellido: new FormControl(this.datocliente.apellido, Validators.required),
    dni: new FormControl(this.datocliente.dni, [Validators.required])
  });

  constructor(private cuentaservice: CuentaService,private clienteservice: ClienteService,) { }

  ngOnInit(): void {

    this.cuentaservice.getauthcuenta().subscribe(
      cuentaAuth => { this.id = cuentaAuth.cliente.id, this.email = cuentaAuth.email,
        console.log(cuentaAuth.id);
        this.clienteservice.getItem(this.id).subscribe(
          datoscliente => { this.datocliente = datoscliente
            console.log(this.id)
            this.formEditUser.value.nombre = datoscliente.nombre
            this.formEditUser.value.apellido = datoscliente.apellido
            this.formEditUser.value.dni = datoscliente.dni
            console.log(datoscliente);
          }
        )
      }
    );
  }


  editar() {
    this.disabled = !this.disabled;
  }

  aceptarCambios() {
    // guardar los cambios
    // enviar un request put a la api para hacer el update
    this.clienteservice.update(this.id,
      {
        "nombre": this.formEditUser.value.nombre,
        "apellido": this.formEditUser.value.apellido,
        "email": this.formEditUser.value.email,
        "dni": this.formEditUser.value.dni
      }
    ).subscribe(
      {
        next: v => {
          console.log(v)
          this.formEditUser.reset;
        },
        error: e => console.log(e)
      }

    );
    // TODO: spinner feedaback mientras carga
    this.disabled = !this.disabled;
  }

  cancelarCambios() {
    // Resetear valores del form con los recibidos por request
    this.formEditUser.reset();
    this.disabled = !this.disabled;

  }
}
