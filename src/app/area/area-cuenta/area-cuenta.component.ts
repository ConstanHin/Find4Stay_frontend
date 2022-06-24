import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { CuentaService } from 'src/app/service/cuenta.service';
import { Router } from '@angular/router';
import { RedirectMessageService } from 'src/app/service/redirect-message.service';

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

  constructor(
    private cuentaservice: CuentaService,
    private authService: AuthService,
    private router: Router,
    private redMessage: RedirectMessageService
  ) { }


  ngOnInit(): void {
    // Obtener el usuario autenticado
    this.cuentaservice.getauthcuenta().subscribe(
      cuentaAuth => {
        this.usuarioLoguado = cuentaAuth
        console.log(this.formEditUser.value.username);

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
    this.cuentaservice.editCuentaAuth(
      {
        "username": this.formEditUser.value.username,
        "password": this.formEditUser.value.password,
        "email": this.formEditUser.value.email
      }
    ).subscribe(
      {
        next: v => {
          console.log(v);
          console.log(sessionStorage.getItem("auth-username"), "-- session username");

          if (v.username != sessionStorage.getItem("auth-username")) {
            // si se cambia el nombre de usuario hacer logout
            this.authService.logout();
            this.router.navigate(['/'])
            this.redMessage.setMessage("Se ha modificado el usuario. Por favor vuelve a iniciar sessión.")

          }
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
