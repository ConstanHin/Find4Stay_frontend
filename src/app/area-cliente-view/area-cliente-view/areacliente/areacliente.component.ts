import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { CuentaService } from 'src/app/service/cuenta.service';

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

  constructor(private cuentaservice: CuentaService,private clienteservice: ClienteService,) { }

  ngOnInit(): void {

    this.cuentaservice.getauthcuenta().subscribe(
      cuentaAuth => { this.id = cuentaAuth.id, this.email = cuentaAuth.email,
        console.log(cuentaAuth.id);
        this.clienteservice.getItem(this.id).subscribe(
          datoscliente => { this.datocliente = datoscliente
            console.log(datoscliente);
          }
        )
      }
    );

  }
}
