import { Component, OnInit} from '@angular/core';
import { ReservaService } from 'src/app/service/reserva.service';
import { CuentaService } from 'src/app/service/cuenta.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.component.html',
  styleUrls: ['./misreservas.component.css']
})
export class MisreservasComponent implements OnInit {

  id?: any;
  email?: any;
  data: any = {"id":""};
  datocliente: any = {"nombre":"", "apellido": "", "dni": ""};
  datosreserva: any = {"codigo":""}

  constructor(
    private cuentaservice: CuentaService,
    private clienteservice: ClienteService,
    private reservaservice: ReservaService) { }

  ngOnInit(): void {

    this.cuentaservice.getauthcuenta().subscribe(
      cuentaAuth => { this.id = cuentaAuth.id, this.email = cuentaAuth.email,
        console.log(cuentaAuth.id);

        this.clienteservice.getItem(this.id).subscribe(
          datoscliente => { this.datocliente = datoscliente
            console.log(datoscliente);

            this.reservaservice.getItem(2).subscribe(
              datosreserva => { this.datosreserva = datosreserva
                console.log(this.datosreserva);
              }
            )
          }
        )
      }
    );

  }
}
