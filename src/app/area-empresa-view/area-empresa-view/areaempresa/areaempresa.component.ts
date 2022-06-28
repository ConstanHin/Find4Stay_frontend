import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';
import { CuentaService } from 'src/app/service/cuenta.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-areaempresa',
  templateUrl: './areaempresa.component.html',
  styleUrls: ['./areaempresa.component.css']
})
export class AreaempresaComponent implements OnInit {

  id?: any;
  email?: any;
  data: any = {"id":""};
  datoempresa: any = {"codigo_empresa":"", "nombre": ""};

  disabled: boolean = true;

  formEditEmpresa = new FormGroup({
    codigo_empresa: new FormControl(this.datoempresa.codigo_empresa, Validators.required),
    nombre: new FormControl(this.datoempresa.nombre, Validators.required),

  });

  constructor(private cuentaservice: CuentaService, private empresaservice: EmpresaService) { }

  ngOnInit(): void {

    this.empresaservice.getempresaauth().subscribe(
      empresaauth => { this.datoempresa = empresaauth
        console.log(empresaauth)
        this.empresaservice.getItem(this.id).subscribe(
          datosempresa =>{ this.datoempresa = datosempresa
            this.formEditEmpresa.value.codigo_empresa = datosempresa.codigo_empresa
            this.formEditEmpresa.value.nombre = datosempresa.nombre
            console.log(datosempresa);

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
    this.empresaservice.update(this.id,
      {
        "codigo_empresa": this.formEditEmpresa.value.codigo_empresa,
        "nombre": this.formEditEmpresa.value.nombre,
      }
    ).subscribe(
      {
        next: v => {
          console.log(v)
          this.formEditEmpresa.reset;
        },
        error: e => console.log(e)
      }

    );
    // TODO: spinner feedaback mientras carga
    this.disabled = !this.disabled;
  }

  cancelarCambios() {
    // Resetear valores del form con los recibidos por request
    this.formEditEmpresa.reset();
    this.disabled = !this.disabled;

  }
}
