import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-area-cuenta',
  templateUrl: './area-cuenta.component.html',
  styleUrls: ['./area-cuenta.component.css']
})
export class AreaCuentaComponent implements OnInit {

  usuarioLoguado: any = { "username": "", "email": "" };
  disabled: boolean = true;

  formEditUser = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.min(6), Validators.max(200)]),
  });

  constructor(private cuentaservice: CuentaService) { }

  ngOnInit(): void {

    this.cuentaservice.getauthcuenta().subscribe(
      cuentaAuth => { this.usuarioLoguado = cuentaAuth
        console.log(cuentaAuth);
      }
    );

  }

  editar() {
    this.disabled = !this.disabled;
  }

  eliminar() {
    console.log("eliminar");

  }

  aceptarCambios() {
    // guardar los cambios
    // enviar un request put a la api para hacer el update
    this.cuentaservice.update(this.usuarioLoguado.id, this.usuarioLoguado).subscribe(
      valor => console.log(valor)
    );
    // TODO: spinner feedaback mientras cargar
    this.disabled = !this.disabled;
  }

  cancelarCambios() {
    // Resetear valores del form con los recibidos por request
    this.formEditUser.reset();
    this.disabled = !this.disabled;

  }



}
