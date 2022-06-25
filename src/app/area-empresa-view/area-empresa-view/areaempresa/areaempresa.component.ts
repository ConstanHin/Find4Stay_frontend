import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';
import { CuentaService } from 'src/app/service/cuenta.service';

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

  constructor(private cuentaservice: CuentaService, private empresaservice: EmpresaService) { }

  ngOnInit(): void {

    this.empresaservice.getempresaauth().subscribe(
      empresaauth => { this.datoempresa = empresaauth
        console.log(empresaauth)
      }
    );
  }

}
