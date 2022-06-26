import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/service/empresa.service';


@Component({
  selector: 'app-nueva-empresa',
  templateUrl: './nueva-empresa.component.html',
  styleUrls: ['./nueva-empresa.component.css']
})
export class NuevaEmpresaComponent implements OnInit {

  message: string | undefined;
  errorMessage: string | undefined;


    /**
   * nombre codigo
   */
     formGroupAddEmpresa = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      codigo_empresa: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    })

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.formGroupAddEmpresa.value);

    this.empresaService.create(this.formGroupAddEmpresa.value).subscribe({
      next: v => {
        this.formGroupAddEmpresa.reset();
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
