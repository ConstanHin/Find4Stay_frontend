import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from '../service/cliente.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  submited = false;
  fail: boolean = false;
  tipo: string = "cliente"
  loading: boolean = false;
  success: boolean = false;

  registerForm = new FormGroup({

    usuario: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.min(6), Validators.max(200)]),
  });

  constructor(
    private clienteService: ClienteService,
    private empresaService: EmpresaService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/'])
    }
  }

  onSubmit() {
    this.loading = true;

    // Crea cliente o empresa
    if (this.tipo === "empresa") {
      var observable = this.empresaService.crearByGuest(
        {
          username: this.registerForm.value.usuario,
          password: this.registerForm.value.password,
          email: this.registerForm.value.email
        })

    } else {
      var observable = this.clienteService.crearByGuest({
        username: this.registerForm.value.usuario,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email
      })

    }

    observable.subscribe({
      next: (v) => {

        this.success = true;
        this.loading = false;

        // Show success message for 2.5sec
        // Make submit button available again
        timer(2500).subscribe(() => { this.success = false; this.submited = false })

        // Redirect to home (TODO: show a successfuly message )
        this.router.navigate(['/']);
      },
      error: (e) => {
        this.fail = true;
        this.loading = false;

        // Show fail message for 2.5sec
        const contador = timer(2500);
        contador.subscribe(() => this.fail = false)

        // Make submit button available again
        this.submited = false
        console.log(e)
      },
    })
  }
  cambioTipo(tipo: string) {
    console.log("cambiadno tipo");

    this.tipo = tipo;
  }
}

