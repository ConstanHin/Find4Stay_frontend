import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  submited = false;
  fail: boolean = false;
  tipo: string= "Cliente"
  loading: boolean = false;
  success: boolean = false;

  registerForm = new FormGroup({

    usuario: new FormControl("", Validators.required),
    email: new FormControl("", [ Validators.email, Validators.required ]),
    password: new FormControl("",[ Validators.required, Validators.min(6), Validators.max(200) ]),
  });

  constructor( private authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/'])
    }
  }

  onSubmit() {
    this.loading = true;
    const usuario = this.registerForm.value.usuario;
    const password = this.registerForm.value.password;
    const email = this.registerForm.value.email;

    const observable = this.authService.register(usuario, password, email)

    observable.subscribe({
      next: (v) => {
        this.success = true;
        this.loading = false;

        // Set logged in status
        this.authService.setAuthenticated(true);
        this.authService.setUsername(usuario);

        // Show success message for 2.5sec
        const contador = timer(2500);
        // Make submit button available again
        contador.subscribe(() => {this.success = false; this.submited = false})

        // Save login in sessionStorage
        window.sessionStorage.setItem("auth-token", v.token)

        // Save login username in sessionStorage
        window.sessionStorage.setItem("auth-username", usuario)

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
    this.tipo = tipo;
  }
}

