import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  message: string | undefined;
  errorMessage: string | undefined;

  /**
   * nombre apellido dni email
   */
  formGroupAddCliente = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formGroupAddCliente.value);

    this.clienteService.create(this.formGroupAddCliente.value).subscribe({
      next: v => {
        this.message = "Registo añadido con éxito.";
        setTimeout(() => this.message = undefined, 4000);
      },
      error: e => {
        this.errorMessage = "Ha ocurrido un error.";
        setTimeout(() => this.errorMessage = undefined, 4000)
      }

    })
  }

}
